"use client"
import { AiFillAppstore } from "react-icons/ai"
import { FaMobile, FaGlobe } from "react-icons/fa"
import { SiAntdesign } from "react-icons/si"
import { TbApi } from "react-icons/tb"
import Title from "../layouts/Title"
import Card from "./Card"

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Xizmatlar" des="Taklif qiladigan xizmatlarim" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Dasturlash"
          des="React.js, Tailwind CSS va boshqa zamonaviy texnologiyalardan foydalanib moslashuvchan va vizual jihatdan jozibali foydalanuvchi interfeyslarini yaratish."
          m={"-1"}
        />
        <Card
          title="Backend Dasturlash"
          des="Node.js, Express.js yordamida mustahkam va kengaytiriladigan backend tizimlarini yaratish va MongoDB kabi ma'lumotlar bazalari bilan integratsiya qilish."
          m={"-5"}
          icon={<AiFillAppstore />}
        />
        <Card
          title="Mobil Ilova Dasturlash"
          des="React Native va Flutter kabi freymvorklar bilan kross-platforma mobil ilovalarni loyihalash va ishlab chiqish."
          m={"-5"}
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Dizayn"
          des="Foydalanuvchi tajribasini yaxshilash uchun Figma kabi vositalardan foydalanib intuitiv va foydalanuvchiga qulay interfeyslarni yaratish."
          m={"0"}
          icon={<SiAntdesign />}
        />
        <Card
          title="Veb-sayt Hosting"
          des="Optimal ishlash va ishonchlilik uchun AWS, Vercel va Netlify kabi platformalarda veb-saytlarni joylashtirish va boshqarish."
          m={"-1"}
          icon={<FaGlobe />}
        />
        <Card
          title="API Integratsiya"
          des="Funksionallik va ma'lumotlar almashinuvini osonlashtirish uchun ilovalarni uchinchi tomon xizmatlari va maxsus API'lar bilan bog'lash."
          m={"-5"}
          icon={<TbApi />}
        />
      </div>
    </section>
  )
}

export default Features
