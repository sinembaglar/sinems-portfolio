import useLanguage from '../hooks/useLanguage'

export default function Profile() {
  const { content } = useLanguage()
  const { profile } = content

  return (
    <section aria-labelledby="profile-title" className="relative overflow-hidden bg-surface">
      <span aria-hidden="true" className="absolute top-8 -left-6 hidden h-8 w-16 rounded-full bg-decor md:block" />
      <span aria-hidden="true" className="absolute top-0 -right-8 hidden h-24 w-24 rounded-full border-[14px] border-brand md:block" />

      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <h2 id="profile-title" className="text-center text-3xl font-medium">
          {profile.title}
        </h2>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <article className="rounded-xl bg-card p-6 shadow-[8px_8px_0_0] shadow-black/10">
            <h3 className="text-lg font-medium text-brand">{profile.basicTitle}</h3>
            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm">
              {profile.basic.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="font-semibold">{label}</dt>
                  <dd className="text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article>
            <h3 className="relative z-0 inline-block text-lg font-medium">
              {profile.aboutTitle}
              <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 -z-10 h-2 rounded bg-brand/40" />
            </h3>
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}
