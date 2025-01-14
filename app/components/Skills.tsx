import { Parallax } from "react-scroll-parallax";
import Container from "./Container";
import useAnimateOnScroll, { applyAnimationClass } from "../hooks/useAnimateScroll";

const Illustration = () => {
  return (
    <div className="w-[300px] h-[600px] relative">
      <Parallax
        translateX={['-100px', '0px']}
        className="absolute z-10 top-[20%] left-0"
      >
        <i className="scale-[10] text-secondary fa-solid fa-database"/>
      </ Parallax>
      <Parallax
        translateX={['-50px', '0px']}
        className="absolute z-10 top-[60%] left-0"
      >
        <i className="scale-[10] text-secondary fa-sharp fa-solid fa-server"/>
      </ Parallax>

      <i className="absolute z-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[15] text-[#ecf0f1] fa-solid fa-file-code"/>
      
      <Parallax
        translateX={['50px', '0px']}
        className="absolute z-10 top-[40%] right-0 "
      >
        <i className="scale-[10] text-secondary fa-brands fa-css"/>
      </Parallax>
      <Parallax
        translateX={['100px', '0px']}
        className="absolute z-10 top-[80%] right-0 "
      >
        <i className="scale-[10] text-secondary fa-brands fa-js"/>
      </Parallax>
    </div>
  )
}

interface SkillType {
  name: string;
  icon: string;
}

interface SkillListProps {
  skillList: SkillType[];
  flexJustify?: string;
}

const SkillList = ({ skillList, flexJustify }: SkillListProps) => {
  return (
    <ul>
      {skillList.map((skill) => (
        <li key={skill.name} className={`flex items-center text-xl mb-2 ${flexJustify}`}>
          {skill.icon && <i className={`${skill.icon} scale-[1.1] text-secondary`} />}
          <span className="ml-2">{skill.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  const sectionAnimationId = "skills-section";
  const isSectionVisible = useAnimateOnScroll(sectionAnimationId);

  const backendSkills: SkillType[] = [
    {
      name: "Ruby on rails",
      icon: ""
    },
    {
      name: "Go",
      icon: ""
    },
    {
      name: "MySQL",
      icon: ""
    },
    {
      name: "Redis",
      icon: ""
    },
    {
      name: "Kafka",
      icon: ""
    },
  ]

  const frontendSkills: SkillType[] = [
    {
      name: "Javascript",
      icon: "fa-brands fa-js"
    },
    {
      name: "Vue.js (+ Pinia / Vuex)",
      icon: "fa-brands fa-vuejs"
    },
    {
      name: "Nuxt.js",
      icon: "fa-solid fa-mountains"
    },
    {
      name: "React.js (+ Redux)",
      icon: "fa-brands fa-react"
    },
    {
      name: "Next.js",
      icon: ""
    },
    {
      name: "Typsecript",
      icon: ""
    },
    {
      name: "CSS (SCSS/LESS/SASS)",
      icon: "fa-brands fa-css"
    },
    {
      name: "Tailwind",
      icon: ""
    },
    {
      name: "Jest / Vitest",
      icon: ""
    },
    {
      name: "Cypress",
      icon: ""
    },
    {
      name: "Webpack / Vite",
      icon: ""
    },
    {
      name: "Figma",
      icon: "fa-brands fa-figma"
    },
    {
      name: "jQuery",
      icon: ""
    },
  ]
  
  return (
    <section className="bg-gradient-to-b from-[#121718] to-cyan-950" id={sectionAnimationId}>
      <Container>
        <h1 className="text-center mb-20 font-bold">Skills</h1>
        <div className="flex justify-between">
          <div className={`${applyAnimationClass(isSectionVisible, 'animate__fadeInLeft')}`}>
            <h3 className="font-bold mb-5">
              <span className="text-secondary">[</span>
              Back_end
              <span className="text-secondary">]</span>
            </h3>
            <SkillList skillList={backendSkills}/>
          </div>
          <Illustration />
          <div className={`${applyAnimationClass(isSectionVisible, 'animate__fadeInRight')} text-right`}>
            <h3 className="font-bold mb-5">
              <span className="text-secondary">&lt;</span>
              Front_end
              <span className="text-secondary">/&gt;</span>
            </h3>
            <SkillList skillList={frontendSkills} flexJustify="justify-end"/>
          </div>
        </div>
      </Container>
    </section>
  );
}