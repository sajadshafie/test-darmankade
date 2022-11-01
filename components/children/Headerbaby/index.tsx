import type { NextPage } from "next";
import style from "./style.module.css";
import Appimage from "../../common/Appimage";
import OptionDoctor from "../optionDoctor";
import LinkPage from "../../Global/Link";
const HeaderBaby: NextPage = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          marginBottom: 50,
        }}
      >
        <LinkPage link="درمانکده" />
      </div>
      <div className={style.container_content}>
        <div className={style.content}>
          <div style={{
            marginBottom:80
          }}>
            <h2 className="title-h2">متخصص نوزادان</h2>
            <p className="text-color fs-10">
              با بهترین پزشکان اعصاب و روان آشنا شوید، بیشتر درمورد اعصاب و روان
              بدانید، پاسخ سوال هایتان را پیدا کنید و مقاله های علمی و تخصصی
              اعصاب و روان را بخوانید.
            </p>
          </div>
          <OptionDoctor />
        </div>
        <div className={style.image_content}>
          <div className={style.baby_img}>
            <Appimage src="/children/img30.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBaby;
