import type { NextPage } from "next";
import OptionItem from "./OptionItem";
import { AiFillStar, AiOutlineSearch, AiOutlineSmile } from "react-icons/ai";
import style from "./style.module.css";
import React from "react";

const OptionDoctor: NextPage = () => {
  let Items: { icon: any; title: string; description: string }[] = [
    {
      icon: <AiFillStar className={style.icon_option} />,
      title: "انتخاب پزشک",
      description:
        "نظرات و تجربه سایر بیماران را بخوانید و پزشک منتخب خود را انتخاب کنید",
    },
    {
      icon: <AiOutlineSearch className={style.icon_option} />,
      title: "دریافت نوبت",
      description: "بصورت حضوری یا آنلاین (تصویری، صوتی و متنی) ویزیت شوید",
    },
    {
      icon: <AiOutlineSmile className={style.icon_option} />,
      title: "معالجه و درمان",
      description: "درمانکده تا بهبودی کامل همراه شماست و کنارتان می ماند",
    },
  ];
  return (
    <div className="d-flex align-center justify-between">
      {Items.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <OptionItem
              index={i}
              title={v.title}
              description={v.description}
              icon={v.icon}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OptionDoctor;
