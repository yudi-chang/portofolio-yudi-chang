import Container from "./Container";
import useAnimateOnScroll, { applyAnimationClass } from "../hooks/useAnimateScroll";
import styles from './Experience.module.scss';

const Timeline = () => {
  interface Event {
    header: string;
    color: string;
    description: string;
    logo?: string;
  }

  const events: Event[] = [
    {
      header: "Bukalapak: Sept 2018 - Present",
      color: "bg-[#E24A68]",
      description: "about 6.5 years of experience as frontend developer (also has experience working as a backend developer here). Notable works are DANA (payment method) integration on Bukalapak website as frontend developer and Kirim Uang (a fintech product to send money to bank account) product in Mitra Bukalapak as both frontend and backend developer. My work here involved using JavaScript (Vue.js, Jest, Vitest, Nuxt, Typescript), Webpack / Vite, CSS (LESS/SASS/SCSS), Tailwind, Ruby, Go, Docker, Google Cloud, Kubernetes, and Gitlab (CI/CD)."
    },
    {
      header: "Xtremax: Feb 2016 - Sept 2018",
      color: "bg-[#FBCA3E]",
      description: "2.5 years of experience as frontend developer. Most of My work here involved using CSS (LESS/SASS), pug / jade, and JavaScript (Including jQuery). Notable works are Singapore Night Festival (2016 sites and 2017 sites and singapore singstat infographic site."
    },
    {
      header: "Freelance: July 2015 - January 2016",
      color: "bg-[#4CADAD]",
      description: "6 months of work on pasarlaut.com website as frontend developer,freelanced and contributed a bit to backend development. My work here involved using CSS, JavaScript (including jQuery), Laravel and MySQL"
    }
  ]
  return (
    <>
      <div className="border-l-8 border-[#fefefe] lg:w-1/2 lg:ml-auto">
        {events.map((event, index) => (
          <div className={`mb-10 pl-8 relative ${styles.timelineBox} ${index % 2 === 0 && 'lg:right-full lg:pl-0 lg:pr-[30px]' }`} key={index}>
            <div className={`px-8 py-3 ${event.color}  ${index % 2 === 0 && 'lg:rounded-tr-[30px] lg:rounded-br-[30px] lg:rounded-none' } rounded-tl-[30px] rounded-bl-[30px] mb-6`}>
              <h3>{event.header}</h3>
            </div>
            <div className="mt-4">{event.description}</div>
          </div>
        ))}
      </div>
    </>
  )
}


const Experience = () => {
  const sectionAnimationId = "experience-section";
  const isSectionVisible = useAnimateOnScroll(sectionAnimationId);

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950 to-[#121718]" id={sectionAnimationId}>
      <Container>
        <h1 className={`${applyAnimationClass(isSectionVisible, 'animate__fadeInUp')} font-bold mb-10`}>Experience</h1>
        <div className={applyAnimationClass(isSectionVisible, 'animate__fadeInUp')}>
          <Timeline />
        </div>
      </Container>
    </section>
  )
}

export default Experience
