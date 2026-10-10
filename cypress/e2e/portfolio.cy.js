// End-to-end tests for the portfolio.
// reqres is stubbed with cy.intercept, so the tests do not depend on the network or an API key.

const API = 'https://reqres.in/api/workintech'

// Opens the page with a saved language and a system color preference.
function visit({ language = 'en', systemDark = false, clearStorage = true } = {}) {
  cy.visit('/', {
    onBeforeLoad(win) {
      if (clearStorage) {
        win.localStorage.clear()
        win.localStorage.setItem('language', JSON.stringify(language))
      }
      // Fake the OS theme preference (prefers-color-scheme).
      cy.stub(win, 'matchMedia').callsFake((query) => ({
        matches: query.includes('dark') && systemDark,
        media: query,
        addEventListener() {},
        removeEventListener() {},
      }))
    },
  })
}

// reqres echoes the body back and adds an id and a timestamp.
function stubApiSuccess(transform = (body) => body) {
  cy.intercept('POST', API, (req) => {
    req.reply({ statusCode: 201, body: { ...transform(req.body), id: '1', createdAt: '2026-01-01' } })
  }).as('postContent')
}

describe('Page content', () => {
  beforeEach(() => stubApiSuccess())

  it('renders every section', () => {
    visit()
    cy.get('#hero-title').should('contain', "I'm Sinem.")
    cy.get('#skills-title').should('have.text', 'Skills')
    cy.get('#profile-title').should('have.text', 'Profile')
    cy.get('#projects-title').should('have.text', 'Projects')
    cy.get('footer').should('contain', 'work together')
  })

  it('renders the lists from data with map', () => {
    visit()
    cy.get('#skills-title').next('ul').children('li').should('have.length', 6)
    cy.get('#projects-title').next().children('article').should('have.length', 3)
  })
})

describe('Language', () => {
  beforeEach(() => stubApiSuccess())

  it('switches between English and Turkish', () => {
    visit({ language: 'en' })
    cy.get('#skills-title').should('have.text', 'Skills')
    cy.get('html').should('have.attr', 'lang', 'en')

    cy.contains('button', 'TÜRKÇE').click()
    cy.get('#skills-title').should('have.text', 'Yetenekler')
    cy.get('html').should('have.attr', 'lang', 'tr')
  })

  it('remembers the choice in localStorage after a reload', () => {
    visit({ language: 'en' })
    cy.contains('button', 'TÜRKÇE').click()
    cy.window().its('localStorage.language').should('eq', '"tr"')

    cy.reload()
    cy.get('#skills-title').should('have.text', 'Yetenekler')
  })
})

describe('Theme', () => {
  beforeEach(() => stubApiSuccess())

  it('follows the system preference on the first visit', () => {
    visit({ systemDark: true })
    cy.get('html').should('have.class', 'dark')
    cy.get('[role=switch]').should('have.attr', 'aria-checked', 'true')
  })

  it('toggles dark mode and remembers it after a reload', () => {
    visit({ systemDark: false })
    cy.get('html').should('not.have.class', 'dark')

    cy.get('[role=switch]').click()
    cy.get('html').should('have.class', 'dark')
    cy.window().its('localStorage.theme').should('eq', '"dark"')

    cy.reload()
    cy.get('html').should('have.class', 'dark')
  })
})

describe('Content API (axios + reqres)', () => {
  it('posts the selected language data and shows the server response', () => {
    // Change one field in the response to prove the page renders what the server sent back.
    stubApiSuccess((body) => ({ ...body, skills: { ...body.skills, title: 'Skills (from API)' } }))
    visit({ language: 'en' })

    cy.wait('@postContent').its('request.body.skills.title').should('eq', 'Skills')
    cy.get('#skills-title').should('have.text', 'Skills (from API)')
    cy.contains('Content received from the server').should('be.visible')
  })

  it('caches each language and does not request it twice', () => {
    stubApiSuccess()
    visit({ language: 'en' })
    cy.wait('@postContent')

    cy.contains('button', 'TÜRKÇE').click()
    cy.wait('@postContent').its('request.body.skills.title').should('eq', 'Yetenekler')

    cy.contains('button', 'ENGLISH').click()
    cy.get('#skills-title').should('have.text', 'Skills')
    cy.get('@postContent.all').should('have.length', 2)
  })

  it('shows an error toast and keeps the local content when the request fails', () => {
    cy.intercept('POST', API, { statusCode: 500, body: {} }).as('postContent')
    visit({ language: 'en' })

    cy.wait('@postContent')
    cy.contains('Could not reach the server, showing local content').should('be.visible')
    cy.get('#skills-title').should('have.text', 'Skills')
  })
})
