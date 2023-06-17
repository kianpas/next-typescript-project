import classes from "@/styles/TechItem.module.scss";

interface Tech {
  id: string;
  name: string;
}

interface Props {
  data: Tech;
}

const TechItem = (props: { data: Tech }) => {
  return (
    <div className={classes.icon}>
      <span>{props.data.name}</span>
    </div>
  );
};

export default TechItem;
