import classes from "@/styles/ProjectItem.module.scss";

interface IProject {
  id: string;
  name: string;
  img: string;
  link: string;
}

const ProjectItem = (props: { key: string; data: IProject }) => {
  return (
    <div className={classes.cover}>
      <div className={classes.item}>
        <img src={props.data.img} />
      </div>
      <div className={classes.desc}>
        <div>
          <p>{props.data.name}</p>
          <span className={classes.link}>
            <a href={props.data.link}>View Detail</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
