import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="pt-24 pb-section text-white bg-dark-bg"
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-primary-400/60 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Portrait"
                  width={1207}
                  height={929}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-gray-200">
                Hello! I'm Kanteliya Meet, a passionate fullstack web developer
                specializing in creating innovative web applications and
                user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  As MERN stack developer
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-gray-200">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-primary-400/60 pl-4">
                  <p className="text-gray-200">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the MERN fullstack
                    Developer, I'm pushing the boundaries of JavaScript
                    frameworks to empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Meet kanteliya,
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                        loading="lazy"
                      />
                      <span className="text-white">Web developer</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
