import React from "react";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        whitehat_stoic
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
         Learning cybersecurity and all things tech.. 
          (a statically generated website using{' '}
        <a
          href="https://www.gatsbyjs.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Gatsby
        </a>{' '}
        and{' '}
        <a
          href="https://www.datocms.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          DatoCMS)
        </a>
        .
      </h4>
    </section>
  )
}
