import classes from "@/styles/ProjectItem.module.scss";

const ProjectItem = () => {
  return (
    <div className={classes.cover}>
      <div className={classes.item}>
        {/* <img src={props.data.img} /> */}
        <div>
          {/* <p>{props.data.name}</p> */}
          <span className={classes.link}>
            {/* <a href={props.data.link}>View Detail</a> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
