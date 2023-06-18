import classes from "@/styles/Project.module.scss";
import ProjectItem from "../ui/ProjectItem";

interface IProject {
  id: string;
  name: string;
  img: string;
  link: string;
}

const Experience = () => {
  return (
    <section className={classes.list} id="experience">
      <article>
        <div className={classes.project}>
          <h1>EXPERIENCE</h1>
          {/* {props.projectData.map((data) => (
            <ProjectItem key={data.id} data={data} />
          ))} */}
        </div>
      </article>
    </section>
  );
};

export default Experience;
