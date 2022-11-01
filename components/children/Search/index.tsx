import React, { useState } from "react";
import type { NextPage } from "next";
import style from "./style.module.css";
import { AiFillFilter, AiOutlineMenuUnfold } from "react-icons/ai";
import AppSelect from "../../common/AppSelect";
import Appbutton from "../../common/Appbutton";
interface Props {
  count: number;
}

const SearchDoctor: NextPage<Props> = (props) => {
  const [state, setState] = useState<{ value: string; label: string }[]>([
    {
      value: "تست",
      label: "تست",
    },
    {
      value: "کاور",
      label: "کاور",
    },
    {
      value: "مراقبت",
      label: "مراقبت",
    },
  ]);
  const visitHandler = (e: object) => {
    console.log(e);
  };
  const visitTimeHandler = (e: object) => {
    console.log(e);
  };

  return (
    <div className="p-container">
      <div className={style.container_content}>
        <h3> {props.count} پزشک, با توجه به جستجو شما یافت شد</h3>
        <div className="line"></div>
        <div className="d-flex align-center justify-between">
          <div className="d-flex align-center">
            <div
              style={{
                marginLeft: 20,
              }}
            >
              <AiFillFilter style={{ marginLeft: 5 }} />
              <span className={style.search_option_text}>فیلتر کردن:</span>
            </div>
            <div
              style={{
                marginLeft: 15,
                width: 150,
              }}
            >
              <AppSelect
                option={state}
                placeholder={"نوع ویزیت"}
                onChange={() => {}}
                defaultValue=""
              />
            </div>
            <div
              style={{
                width: 150,
                marginLeft: 15,
              }}
            >
              <AppSelect
                option={state}
                placeholder={"زمان ویزیت"}
                onChange={() => {}}
                defaultValue=""
              />
            </div>
            <div>
              <Appbutton onClick={() => {}} content={"بیشتر"} className="" />
            </div>
          </div>
          <div className="d-flex align-center">
            <AiOutlineMenuUnfold style={{ marginLeft: 5 }} />
            <span
              className={style.search_option_text}
              style={{
                marginLeft: 10,
              }}
            >
              مرتب سازی بر اساس :
            </span>
            <AppSelect
              option={state}
              placeholder={"جدیدترین"}
              onChange={() => {}}
              defaultValue=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDoctor;
