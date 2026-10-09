import useLanguage from '../hooks/useLanguage'
import Marker from './Marker'

export default function Profile() {
  const { content } = useLanguage()
  const { profile } = content

  return (
    <section aria-labelledby="profile-title" className="bg-surface">
      <div className="container-page py-16 md:py-[71px]">
        <h2 id="profile-title" className="text-center text-4xl font-medium md:text-5xl md:leading-[1.21]">
          {profile.title}
        </h2>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <article className="rounded-md bg-card px-6 py-8 sm:px-10 sm:py-10 shadow-[10px_10px_0_0] shadow-card-shadow">
            <h3 className="font-serif text-[28px] text-brand">{profile.basicTitle}</h3>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-10 gap-y-5 text-lg">
              {profile.basic.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="font-semibold">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="lg:pt-10">
            <h3 className="font-serif text-[28px]">
              <Marker barClassName="-left-2 right-0 top-1/2 h-1/3 bg-marker">{profile.aboutTitle}</Marker>
            </h3>
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}
