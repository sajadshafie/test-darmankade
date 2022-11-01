import type { NextPage } from "next";
import style from "./style.module.css";
import Appimage from "../../common/Appimage";
import ViewLine from "./ViewLine";
import {
  AiFillCodepenSquare,
  AiFillStar,
  AiFillThunderbolt,
} from "react-icons/ai";
import Appbutton from "../../common/Appbutton";

interface data {
  name: string;
  specialty: string;
  start: number;
  comments: any;
  location: string;
  count_comment: number;
  visit: string;
  turn: string;
  city: string;
  new: boolean;
  image: string;
  space: number;
  satisfaction: number;
}

const CardItem: NextPage<data> = (props) => {
  const ratingHandler = () => {
    console.log(props.start);
    let res;
    if (props.start == 0 || props.new) {
      res = (
        <div className={style.stars}>
          <span className="fw-bold">بدون نظر</span>
          <AiFillStar color="#ffd700" />
        </div>
      );
    }
    if (props.new) {
      res = (
        <div className="d-flex align-center">
          <div className={style.stars}>
            <span
              style={{
                color: "#8d58ff",
                fontSize: 10,
              }}
            >
              عضو جدید
            </span>
          </div>
          <AiFillThunderbolt color="#006cff" />
        </div>
      );
    } else {
      res = (
        <div className={style.stars}>
          <span className="fw-bold">{props.start}</span>
          <AiFillStar color="#ffd700" />
        </div>
      );
    }
    return res;
  };
  return (
    <div className={style.card_container}>
      <div className={style.card_content}>
        <div className={style.doctor_detail}>
          <div className={style.doctor_image}>
            <Appimage src={props.image} />
          </div>
          <div>
            <h3 className={style.name_doctor}>{props.name}</h3>
            <span className={style.des}>{props.specialty}</span>
            <div className={style.rating_}>{ratingHandler()}</div>
            <p className={style.des}>{props.comments}</p>
          </div>
        </div>
        <div className={style.doctor_view}>
          <div className="d-flex align-center justify-between mb-1">
            <span className="fs-10 sub-color1 fw-bold">
              {props.city} | {props.location}{" "}
            </span>
            <span className={style.space}>فاصله تا مطب :{props.space}</span>
          </div>
          <div className={style.detail_}>
            <ViewLine
              title={"ویزیت ها"}
              detail={props.visit}
              icon={<AiFillCodepenSquare className={style.icon} />}
            />
            <ViewLine
              title={"تا اولین نوبت"}
              detail={props.turn}
              icon={<AiFillCodepenSquare className={style.icon} />}
            />
            <ViewLine
              title={`${props.comments?.length} نظر`}
              detail={`${props.satisfaction} رضایت`}
              icon={<AiFillCodepenSquare className={style.icon} />}
            />
          </div>
          <div style={{
            marginTop:10
          }}>
          <Appbutton
            className="button-sec fw-bold"
            content="مشاهده و دریافت نوبت"
            onClick={() => {}}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
