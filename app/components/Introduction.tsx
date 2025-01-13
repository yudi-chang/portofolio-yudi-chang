"use client";
import Image from "next/image";
import Container from "./Container";
import useAnimateOnScroll from "../hooks/useAnimateScroll";

const PersonalUrl = () => {
  interface UrlType {
    url: string;
    icon: string;
  }

  const urls: UrlType[] = [
    {
      url: "https://www.linkedin.com/in/yudi-chang/" ,
      icon: "fab fa-linkedin"
    },
    {
      url: "https://github.com/yudi-chang/" ,
      icon: "fab fa-github"
    },
    {
      url: "mailto:m.yudi.chang@gmail.com" ,
      icon: "fa-regular fa-envelope"
    },
    {
      url: "https://wa.me/6281234567890",
      icon: "fab fa-whatsapp"
    }
  ]

  return (
    <div className="text-5xl">
      {urls.map((url, index) => (
        <a 
          href={url.url}
          key={index}
          className={`${index < urls.length - 1 && 'mr-8'} inline-flex items-center hover:text-secondary hover:scale-125`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className={url.icon}></i>
        </a>
      ))}
    </div>
  );
}

const Introduction = () => {
  const sectionAnimationClass = "introduction-section";
  const isSectionVisible = useAnimateOnScroll(sectionAnimationClass);

  const animationClass = (inAnimation: string) => {
    return `relative opacity-0 transition-opacity duration-1000 animate__animated ${isSectionVisible ? inAnimation : ''}`
  }

  return (
    <section className="py-40" id={sectionAnimationClass}>
      <Container>
        <div className="text-center flex flex-col mb-10 items-center lg:text-left lg:flex-row lg:mb-8">
          <div className={`order-2 lg:order-1 lg:w-[75%] lg:pr-10 lg:mr-20 ${animationClass('animate__fadeInLeft')}`}>
            <h1 className="text-4xl mb-10 leading-normal">
              Hello, I&apos;m <span className="text-secondary">M. Yudi chang,</span> <br/> a Frontend / Fullstack Developer
            </h1>

            <h3 className="text-2xl mb-7">
              With over <span className="text-secondary">9+ years</span> of experience, I specialize in building fast, responsive web applications. I have also spent <span className="text-secondary">the last 3 years</span> transitioning to Fullstack development, focusing on fintech products.
            </h3>

            <h3 className="text-2xl">
              I&apos;m always eager to learn new things and consider myself a fast learner.
            </h3>
          </div>
          <div className={`order-1 mb-10 lg:m-0 lg:order-2 ${animationClass('animate__fadeInRight')}`}>
            <div className="pr-3 pb-3 w-[300px] overflow-hidden rotate-6 border-b-4 border-r-4 border-secondary">
              <Image
                src="/images/profile-picture.png"
                alt="Yudi Chang"
                width={987}
                height={970}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
        <div  className={`text-center lg:text-left ${animationClass('animate__fadeInLeft')}`}>
          <PersonalUrl />
        </div>
      </Container>
    </section>
  )
}

export default Introduction
