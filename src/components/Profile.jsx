import useLanguage from '../hooks/useLanguage'
import Marker from './Marker'

export default function Profile() {
  const { content } = useLanguage()
  const { profile } = content

  return (
    <section aria-labelledby="profile-title" className="bg-surface">
      <div className="container-page py-20">
        <h2 id="profile-title" className="text-center text-4xl font-medium md:text-[40px]">
          {profile.title}
        </h2>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <article className="rounded-md bg-card px-10 py-10 shadow-[10px_10px_0_0] shadow-card-shadow">
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

          <article className="md:pt-10">
            <h3 className="font-serif text-[28px]">
              <Marker barClassName="-left-2 top-1/2 h-1/3 w-[85%] bg-marker">{profile.aboutTitle}</Marker>
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
