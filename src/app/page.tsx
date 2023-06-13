"use client";
import ContactSection from "@/components/Contact";
import ProjectsSection from "@/components/Projects";
import { Underline } from "@/components/Underline";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import squareImage from "../assets/square.png";

export default function Home() {
  const gotTo = (section: "hero" | "about" | "projects" | "contact") => () => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <nav className="fixed z-20 w-full flex items-center justify-center">
        <div
          style={{
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 40px 40px 40px",
            borderColor: "transparent transparent #f3f2f2 transparent",
            transform: "rotate(45deg) translateY(-29px) translateX(9px)",
          }}
        ></div>
        <div className="bg-[#f3f2f2] py-4 px-6 flex gap-40 shadow-md">
          <span>
            <a className="font-medium focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%] cursor-pointer relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] border-[none] after:content-[''] after:pointer-events-none after:absolute after:w-[0%] after:h-0.5 after:bg-[#8257E6] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5">
              Home
            </a>
          </span>
          <span className="flex gap-6">
            <a
              onClick={gotTo("projects")}
              className="font-medium focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%] cursor-pointer relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] border-[none] after:content-[''] after:pointer-events-none after:absolute after:w-[0%] after:h-0.5 after:bg-[#8257E6] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5"
            >
              Projetos
            </a>
            <a className="font-medium focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%] cursor-pointer relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] border-[none] after:content-[''] after:pointer-events-none after:absolute after:w-[0%] after:h-0.5 after:bg-[#8257E6] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5">
              Sobre
            </a>
            <a
              onClick={gotTo("contact")}
              className="font-medium focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%] cursor-pointer relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] border-[none] after:content-[''] after:pointer-events-none after:absolute after:w-[0%] after:h-0.5 after:bg-[#8257E6] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5"
            >
              Contato
            </a>
          </span>
        </div>
        <div
          style={{
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 40px 40px 40px",
            borderColor: "transparent transparent #f3f2f2 transparent",
            transform: "rotate(315deg) translateY(-29px) translateX(-9px)",
          }}
        ></div>
      </nav>
      <Image src={squareImage} fill alt="Square" className="absolute" />
      <div className="min-h-screen relative flex items-center justify-center z-10">
        <Spline
          className="absolute w-full h-full top-0 bottom-0 left-0 right-0 z-1"
          scene="https://prod.spline.design/5IHSVeFOxKW3iE3n/scene.splinecode"
        />
        <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center">
          <div className="relative">
            <h2 className="text-[#242424] font-bold text-[1.5rem] leading-[160%] relative z-10">
              👋 Meu nome é Lucas, e sou...
            </h2>
            <h1 className="text-[#242424] font-extrabold text-[5rem] leading-[110%] tracking-tighter relative z-10 max-w-2xl">
              Desenvolvedor <span>Front-end</span>
            </h1>
            <Underline className="absolute bottom-[-10px] left-[-40px]" />
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center">
        <div className="w-full flex items-center gap-10 px-80">
          <div className="w-full h-1 bg-black/20"></div>
          <h3 className="text-[#242424] font-extrabold text-[2rem] leading-[110%] tracking-tighter relative z-10 max-w-2xl">
            Projetos
          </h3>
          <div className="w-full h-1 bg-black/20"></div>
        </div>

        <ProjectsSection lang="pt" />
      </section>

      <section className="flex flex-col items-center justify-center mt-20">
        <div className="w-full flex items-center gap-10 px-80">
          <div className="w-full h-1 bg-black/20"></div>
          <h3 className="text-[#242424] font-extrabold text-[2rem] leading-[110%] tracking-tighter relative z-10 max-w-2xl">
            Contato
          </h3>
          <div className="w-full h-1 bg-black/20"></div>
        </div>

        <ContactSection lang="pt" />
      </section>
    </main>
  );
}
