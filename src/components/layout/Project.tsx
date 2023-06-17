import classes from "@/styles/Project.module.scss";
import ProjectItem from "../ui/ProjectItem";

interface IProject {
  id: string;
  name: string;
  img: string;
  link: string;
}

const Project = (props: { projectData: IProject[] }) => {
  return (
    <section className={classes.list} id="project">
      <article>
        {props.projectData.map((data) => (
          <ProjectItem key={data.id} data={data} />
        ))}
      </article>
    </section>
  );
};

export default Project;
