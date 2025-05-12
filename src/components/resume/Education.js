"use client"
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard"

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* O'rganish Yo'li Bo'limi */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Mening O'rganish Yo'lim</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HTML & CSS"
            subTitle="Veb-dasturlash asoslari"
            result="Mukammal"
            des="Veb-tuzilish va dizayn asoslarini, shu jumladan moslashuvchan dizayn tamoyillarini o'rgandim."
          />
          <ResumeCard
            title="JavaScript & React.js"
            subTitle="Interaktiv foydalanuvchi interfeyslarini yaratish"
            result="Yuqori daraja"
            des="JavaScript ES6+, React.js, komponentlarga asoslangan arxitektura va holatni boshqarish bo'yicha malaka oshirdim."
          />
          <ResumeCard
            title="UI Freymvorklar & Uslublash"
            subTitle="Chakra UI, Tailwind CSS, Material UI"
            result="Malakali"
            des="Foydalanuvchi tajribasini yaxshilash va ishlab chiqarishni osonlashtirish uchun zamonaviy UI freymvorklarni o'rgandim."
          />
          <ResumeCard
            title="Backend Dasturlash"
            subTitle="Node.js, Express.js, Ma'lumotlar bazalari"
            result="Malakali"
            des="RESTful API'larni ishlab chiqdim, MongoDB & MySQL kabi ma'lumotlar bazalari bilan ishladim va autentifikatsiyani boshqardim."
          />
        </div>
      </div>

      {/* Tajriba Bo'limi */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Mening O'rganish Yo'lim</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Dasturlash"
            subTitle="Kengaytiriladigan veb-ilovalarni yaratish"
            result="Yuqori daraja"
            des="React.js, Next.js va backend texnologiyalaridan foydalanib to'liq stack ilovalarni ishlab chiqdim."
          />
          <ResumeCard
            title="Mobil Dasturlash"
            subTitle="React Native & Kross-platforma ilovalar"
            result="O'rta daraja"
            des="React Native yordamida mobil ilovalarni yaratdim, UI/UX va API integratsiyasiga e'tibor qaratdim."
          />
          <ResumeCard
            title="Kiberhavfsizlik & Eng yaxshi amaliyotlar"
            subTitle="Veb-ilovalarni himoyalash"
            result="O'rta daraja"
            des="Veb-xavfsizlik, autentifikatsiya va zaifliklarning oldini olish uchun eng yaxshi kodlash amaliyotlari haqida o'rgandim."
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Education
