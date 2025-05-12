"use client"
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard"

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Hozirgi kungacha</p>
          <h2 className="text-3xl md:text-4xl font-bold">Ish Tajribasi</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fullstack Dasturchi"
            subTitle="MOdevco jamoa - (2024 - Hozirgi kungacha)"
            result="O'zbekiston"
            des="Zamonaviy freymvorklar bilan to'liq ilovalarni yaratish uchun frontend va backend ko'nikmalarini birlashtirish."
          />
          <ResumeCard
            title="Mobil Dasturchi"
            subTitle="MOdevco Jamoa - (2023 - 2024)"
            result="O'zbekiston"
            des="React Native yordamida mobil ilovalarni ishlab chiqish, API va autentifikatsiyani integratsiya qilish."
          />
          <ResumeCard
            title="Backend Dasturchi"
            subTitle="MOdevco Jamoa - (2023 - 2024)"
            result="O'zbekiston"
            des="Node.js, Express.js, ma'lumotlar bazalari: MongoDB va RESTful API'lardan foydalanib backend tizimlarini yaratish va qo'llab-quvvatlash."
          />
          <ResumeCard
            title="Frontend Dasturchi"
            subTitle="MOdevco Jamoa - (2022 - 2023)"
            result="O'zbekiston"
            des="Foydalanuvchilarga qulay interfeyslarni yaratish uchun HTML, CSS, JavaScript va React.js, Next.js, ChackraUi, MaterialUi, Tailwind Css bilan ishlash."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Davom etmoqda</p>
          <h2 className="text-3xl md:text-4xl font-bold">O'rganish va O'sish</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Kiberhavfsizlik Ishqibozi"
            subTitle="O'z-o'zini o'rganish (2024 - Hozirgi kungacha)"
            result="Davom etmoqda"
            des="Ilovalarni himoya qilish uchun xavfsizlik bo'yicha eng yaxshi amaliyotlar, etik hacking va ma'lumotlarni himoya qilishni o'rganish."
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
