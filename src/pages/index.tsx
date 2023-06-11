import Link from "next/link";
import { Fragment, useRef, createRef, useCallback, useState } from "react";
import { GetStaticProps } from "next";
import NavBar from "@/components/layout/NavBar";

import classes from "@/styles/Home.module.scss";
import About from "@/components/layout/About";
import Project from "@/components/layout/Project";

//기술 타입
interface Tech {
  id: string;
  name: string;
}

//프롭 타입
interface Props {
  tech: Tech[];
}

export const getStaticProps: GetStaticProps = async () => {
  const techData: Tech[] = [
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
  ];
  return {
    props: {
      tech: techData,
    },
  };
};

const Home = (props: Props) => {
  const aboutRef = useRef<null | HTMLDivElement>(null);
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
  const scrollToRef = () => {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <NavBar />
      <button onClick={scrollToRef}>12121212</button>
      <section className={classes.home} ref={aboutRef}>
        {/* <h1>{height}</h1> */}
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
      <About ref={aboutRef} tData={props.tech} />
      <Project />
    </main>
  );
};

export default Home;
