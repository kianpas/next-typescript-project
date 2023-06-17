import Link from "next/link";
import { Fragment, useRef, createRef, useCallback, useState } from "react";
import { GetStaticProps } from "next";
import NavBar from "@/components/layout/NavBar";

import classes from "@/styles/Home.module.scss";
import About from "@/components/layout/About";
import Project from "@/components/layout/Project";

//기술 타입
interface ITech {
  id: string;
  name: string;
}

interface IProject {
  id: string;
  name: string;
  img: string;
  link: string;
}

//프롭 타입
interface Props {
  tech: ITech[];
  project: IProject[];
}

export const getStaticProps: GetStaticProps = async () => {
  const techData: ITech[] = [
    {
      id: "01",
      name: "Java",
    },
    {
      id: "02",
      name: "Spring",
    },
    {
      id: "03",
      name: "JavaScript",
    },
    {
      id: "04",
      name: "TypeScript",
    },
    {
      id: "05",
      name: "Oracle",
    },
  ];

  const projectData: IProject[] = [
    {
      id: "01",
      name: "세미 프로젝트",
      img: "/images/semiproject.jpg",
      link: "https://github.com/kianpas/frogmarket",
    },
    {
      id: "02",
      name: "파이널 프로젝트",
      img: "/images/finalproject.png",
      link: "https://github.com/kianpas/final-pjt-upmu",
    },
    {
      id: "03",
      name: "홈페이지 프로젝트",
      img: "/images/homeproject.jpg",
      link: "https://github.com/kianpas/kianpas.github.io",
    },
    {
      id: "04",
      name: "React Homepage",
      img: "/images/reacthome.png",
      link: "https://github.com/kianpas/homepage-project",
    },
  ];
  return {
    props: {
      tech: techData,
      project: projectData,
    },
  };
};

const Home = (props: Props) => {
  //페이지 스크롤 기능 주석 처리
  // const aboutRef = useRef<null | HTMLDivElement>(null);
  // const [height, setHeight] = useState(0);

  // const measuredRef = useCallback((node: any) => {
  //   if (node !== null) {
  //     setHeight(node.getBoundingClientRect().height);
  //   }
  // }, []);

  // const scrollToRefTT = useCallback(() => {
  //   console.log(aboutRef.current);

  // }, []);

  //스크롤 이동
  // const scrollToRef = () => {
  //   aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <main>
      <NavBar />
      {/* <button onClick={scrollToRef}>12121212</button> */}
      <section className={classes.home}>
        <article>
          <h1>
            <span>Hello!</span>
          </h1>
          <h2>
            <span>I'm Lee Un San</span>
          </h2>
          <p>안녕하세요! 제 홈페이지에 오신걸 환영합니다!</p>
        </article>
      </section>
      <About tData={props.tech} />
      <Project projectData={props.project} />
    </main>
  );
};

export default Home;
