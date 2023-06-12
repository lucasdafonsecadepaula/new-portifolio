"use client";
import { Underline } from "@/components/Underline";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main>
      {/* <motion.nav
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed z-20 w-full flex items-center justify-center"
      >
        <div
          style={{
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 40px 40px 40px",
            borderColor: "transparent transparent #eeeeee transparent",
            transform: "rotate(45deg) translateY(-29px) translateX(9px)",
          }}
        ></div>
        <div className="bg-[#eeeeee] py-4 px-6">test</div>
        <div
          style={{
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 40px 40px 40px",
            borderColor: "transparent transparent #eeeeee transparent",
            transform: "rotate(315deg) translateY(-29px) translateX(-9px)",
          }}
        ></div>
      </motion.nav> */}
      <div className="min-h-screen relative flex items-center justify-center">
        <Spline
          className="absolute w-full h-full top-0 bottom-0 left-0 right-0"
          scene="https://prod.spline.design/5IHSVeFOxKW3iE3n/scene.splinecode"
        />
        <div className="relative z-10 flex flex-col">
          <h2 className="text-[#242424] font-bold text-[1.5rem] leading-[160%] relative z-10">
            👋 Meu nome é Lucas, e sou...
          </h2>
          <h1 className="text-[#242424] font-extrabold text-[5rem] leading-[110%] tracking-tighter relative z-10 max-w-2xl">
            Desenvolvedor <span>Front-end</span>
          </h1>
          <Underline className="absolute bottom-[-10px] left-[-40px]" />
        </div>
      </div>
    </main>
  );
}
