"use client";
import Image from "next/image";
import Container from "./Container";
import useAnimateOnScroll, { applyAnimationClass } from "../hooks/useAnimateScroll";

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
      url: "https://wa.me/6289686211228",
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
  const sectionAnimationId = "introduction-section";
  const isSectionVisible = useAnimateOnScroll(sectionAnimationId);

  return (
    <section className="py-20 lg:py-40" id={sectionAnimationId}>
      <Container>
        <div className="text-center flex flex-col mb-10 items-center lg:text-left lg:flex-row lg:mb-8">
          <div className={`order-2 lg:order-1 lg:w-[75%] lg:pr-10 lg:mr-20 ${applyAnimationClass(isSectionVisible, 'animate__fadeInLeft')}`}>
            <h1 className="mb-10 leading-normal">
              Hello, I&apos;m <span className="text-secondary">M. Yudi chang,</span> <br/> a Frontend / Fullstack Developer
            </h1>

            <h3 className="mb-7">
              With over <span className="text-secondary">9+ years</span> of experience, I specialize in building fast, responsive web applications. I have also spent <span className="text-secondary">the last 3 years</span> transitioning to Fullstack development, focusing on fintech products.
            </h3>

            <h3>
              I&apos;m always eager to learn new things and consider myself a fast learner.
            </h3>
          </div>
          <div className={`order-1 mb-10 lg:m-0 lg:order-2 ${applyAnimationClass(isSectionVisible, 'animate__fadeInRight')}`}>
            <div className="pr-3 pb-3 w-[300px] overflow-hidden lg:rotate-6 border-b-4 border-r-4 border-secondary">
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
        <div  className={`text-center lg:text-left ${applyAnimationClass(isSectionVisible, 'animate__fadeInLeft')}`}>
          <PersonalUrl />
        </div>
      </Container>
    </section>
  )
}

export default Introduction
