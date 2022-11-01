import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import style from "./style.module.css";
import api from "../../../config/api";
import Map from "../../libs/GoogleMap";
import dynamic from "next/dynamic";
import CardItem from "./CardItem";
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
const DoctorRender: NextPage = () => {
  const MapWithNoSSR = dynamic(() => import("../../libs/GoogleMap"), {
    ssr: false,
  });
  const [data, setData] = useState<data[]>([
    {
      satisfaction: 56,
      space: 12,
      image: "/children/doctor1.png",
      new: false,
      name: "فرید عابدین گیلانی",
      specialty: "فوق تخصص گوارش، کبد و آندوسکوپی",
      comments: [
        "سلامتیمو مدیون آقای دکتر و علمشون هستم. ایشلا همیشه سلامت باشند و از سایت خوب درمانکده هم خیلی ممنونم.",
        "مرسی اقای دکتر",
      ],
      location: "سعادت اباد",
      city: "تهران",
      count_comment: 57,
      start: 4.3,
      visit: "حضوری /تصویری/ صوتی",
      turn: "ساعت مانده",
    },
    {
      satisfaction: 56,
      space: 12,
      image: "/children/doctor2.png",
      new: false,
      name: "رباب مقصودی",
      specialty: "فوق تخصص جراحی کلیه و مجاری ادراری",
      comments: [
        "سلامتیمو مدیون آقای دکتر و علمشون هستم. ایشلا همیشه سلامت باشند و از سایت خوب درمانکده هم خیلی ممنونم.",
        "مرسی اقای دکتر",
      ],
      location: "سعادت اباد",
      city: "تهران",
      count_comment: 56,
      start: 4.5,
      visit: "حضوری /تصویری/ صوتی",
      turn: "ساعت مانده",
    },
    {
      satisfaction: 56,
      space: 12,
      image: "/children/doctor3.png",
      new: false,
      name: "فرهاد نادری نیا",
      specialty: "فوق تخصص مغز و اعصاب",
      comments: ["سلامتیمو مدیون آقای دکتر و علمشون هستم. "],
      location: "پیروزی",
      city: "تهران",
      count_comment: 57,
      start: 5,
      visit: "حضوری ",
      turn: "ساعت مانده",
    },
    {
      satisfaction: 56,
      space: 12,
      image: "/children/doctor4.png",
      name: "منعم رشدی",
      specialty: "فوق تخصص جراحی کلیه و مجاری ادراری",
      comments: [
        "سلامتیمو مدیون آقای دکتر و علمشون هستم. ایشلا همیشه سلامت باشند و از سایت خوب درمانکده هم خیلی ممنونم.",
        "مرسی اقای دکتر",
      ],
      location: "نازی اباد",
      city: "تهران",
      count_comment: 18,
      start: 0,
      new: true,
      visit: "حضوری ",
      turn: "ساعت مانده",
    },
    {
      satisfaction: 56,
      space: 12,
      image: "/children/doctor5.png",
      new: false,
      name: "مرتضی جان نثاری لادانی",
      specialty: "فوق تخصص ارتوپدی",
      comments: [
        "سلامتیمو مدیون آقای دکتر و علمشون هستم. ایشلا همیشه سلامت باشند و از سایت خوب درمانکده هم خیلی ممنونم.",
        "مرسی اقای دکتر",
      ],
      location: "اکبر اباد",
      city: "تهران",
      count_comment: 57,
      start: 0,
      visit: "فعال",
      turn: "ساعت مانده",
    },
    {
      satisfaction: 56,
      space: 12,
      image: "/children/doctor1.png",
      new: false,
      name: "فرید عابدین گیلانی",
      specialty: "فوق تخصص گوارش، کبد و آندوسکوپی",
      comments: [
        "سلامتیمو مدیون آقای دکتر و علمشون هستم. ایشلا همیشه سلامت باشند و از سایت خوب درمانکده هم خیلی ممنونم.",
        "مرسی اقای دکتر",
      ],
      location: "سعادت اباد",
      city: "تهران",
      count_comment: 57,
      start: 4.3,
      visit: "حضوری /تصویری/ صوتی",
      turn: "ساعت مانده",
    },
  ]);
  useEffect(() => {
    api
      .search({
        EnglishDegreeName: "orthopedist",
        EnglishZoneName: "tehran",
        TagId: "0",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.render_doctor}>
        {data.map((v, i) => {
          return (
            <React.Fragment key={i}>
              <CardItem
                name={v.name}
                satisfaction={v.satisfaction}
                space={v.space}
                image={v.image}
                start={v.start}
                comments={v.comments}
                city={v.city}
                new={v.new}
                visit={v.visit}
                location={v.location}
                specialty={v.specialty}
                count_comment={v.count_comment}
                turn={v.turn}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className={style.doctor_location}>
      <MapWithNoSSR />
      </div>
    </div>
  );
};
export default DoctorRender;
