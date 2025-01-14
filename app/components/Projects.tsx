import Container from "./Container";
import Image from "next/image";
import useAnimateOnScroll, { applyAnimationClass } from "../hooks/useAnimateScroll";

interface Url {
  url: string;
  stack: string;
  github: string;
}

interface ProjectInfo {
  title: string,
  description: string,
  stacks: string[],
  urls: Url[],
  img: string,
}

interface ProjectCardProps {
  projects: ProjectInfo[]
}

const ProjectCard = ({projects}: ProjectCardProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <div key={project.title} className="lg:flex mb-20 pb-20 border-b-4 border-secondary">
          <div className={`${index % 2 === 1 && 'order-2'} mx-auto mb-10 border-b-4 border-r-4 border-secondary pr-3 pb-3 lg:border-none lg:p-0 lg:mb-0 w-[350px] max-h-[400px] overflow-hidden text-center max-w-full`}>
            <Image
              src={project.img}
              alt={project.title}
              width={987}
              height={970}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className={`${index % 2 === 1 ? 'order-1 lg:pr-10' : 'lg:pl-10'} flex-1`}>
            <h3 className="text-secondary font-bold">{project.title}</h3>
            <div className="flex flex-wrap my-5">
              {project.stacks.map((stack) => (
                <div className="text-secondary text-xl mr-5" key={stack}>{stack}</div>
              ))}
            </div>
            <div className="mb-5">{project.description}</div>
            <div className="flex gap-10">
              {project.urls.map((url) => (
                <div key={url.url} className={project.urls.length > 1 ? 'w-full lg:w-auto' : 'w-full lg:w-1/2'}>
                  <div className="mb-2 block text-secondary">{url.stack}</div>
                  <a href={url.url} target="_blank" className="py-2 px-4 bg-[#c0392b] rounded-md mr-2 block w-full text-center mb-2 md:w-auto md:inline-block">View</a>
                  <a href={url.github} target="_blank" className="py-2 px-4 bg-[#34495e] rounded-md block w-full text-center md:w-auto md:inline-block">Github Project</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const Projects = () => {
  const sectionAnimationId = "projects-section";
  const isSectionVisible = useAnimateOnScroll(sectionAnimationId);

  const projects: ProjectInfo[] = [
    {
      title: 'Portofolio',
      description: 'This project is my portfolio page. It introduces me and highlights my skills, experiences, and personal projects, along with a list of the technologies used to create them. The page is fully responsive, ensuring an optimal viewing experience across different devices.',
      stacks: ['React', 'Next', 'Typescript', 'Tailwind'],
      urls: [
        {
          url: '/',
          stack: 'React',
          github: 'https://github.com/yudi-chang/portofolio-yudi-chang'
        },
      ],
      img: '/images/portofolio.png'
    },
    {
      title: 'Movie list',
      description: 'This project is a movie listing page where users can add and remove movies from their favorites. Users can also view their favorite movies. The website features a search function and pagination for the movie listings. It is fully responsive, ensuring an optimal experience across devices. I have created two versions of this project: one using React.js and the other using Vue 3 (with Nuxt). Additionally, I minimized the use of Tailwind CSS in this project to highlight my proficiency in traditional CSS.',
      stacks: ['React', 'Vue', 'Nuxt', 'Vuex', 'Redux', 'Typescript', 'SCSS'],
      urls: [
        {
          url: 'https://film-db-react-yudi-chang.netlify.app/',
          stack: 'React',
          github: 'https://github.com/yudi-chang/movie-list-react'
        },
        {
          url: 'https://film-db-yudi-chang.netlify.app/',
          stack: 'Vue',
          github: 'https://github.com/yudi-chang/movie-list'
        }
      ],
      img: '/images/film-db.png'
    },
    {
      title: 'Catalog',
      description: 'This project is a catalog listing page where users can add and remove items from their cart. Users can also view a catalog detail page by clicking on a catalog item. On the detail page, they can select the item type and add it to the cart. The page is fully responsive, ensuring a seamless experience across devices.',
      stacks: ['Vue', 'Nuxt', 'Typescript', 'SCSS'],
      urls: [
        {
          url: 'https://endearing-taffy-659011.netlify.app/',
          stack: 'Vue',
          github: 'https://github.com/yudi-chang/product-listing'
        },
      ],
      img: '/images/catalog.png'
    }
  ]

  return (
    <section id={sectionAnimationId}>
      <Container>
        <h1 className={`${applyAnimationClass(isSectionVisible, 'animate__fadeInUp')} text-right font-bold mb-16`}>Projects</h1>
        <div className={applyAnimationClass(isSectionVisible, 'animate__fadeInUp')}>
          <ProjectCard projects={projects}/>
        </div>
      </Container>
    </section>
  )
}

export default Projects
