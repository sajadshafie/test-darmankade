import type { NextPage } from "next";
import style from "./style.module.css";


interface Props {
  icon: string;
  title: string;
  description: string;
  index:number
}
const OptionItem: NextPage<Props> = (props) => {
  
  return (
    <div className={`${style.item_option} ${props.index%2&&style.space_item }` } >
      {props.icon}
      <h3 className={style.title_item}>{props.title}</h3>
      <span className="text-color description">{props.description}</span>
    </div>
  );
};
export default OptionItem;
