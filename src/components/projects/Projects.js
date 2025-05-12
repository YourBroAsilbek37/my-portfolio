"use client"
import Title from "../layouts/Title"
import { projectOne, projectTwo, projectThree } from "../../assets/index"
import ProjectsCard from "./ProjectsCard"

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="MENING PORTFOLIOMNI KO'RING VA FIKR BILDIRING" des="Mening Loyihalarim" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="IJTIMOIY TARMOQ KLONI"
          des="Zamonaviy ijtimoiy tarmoq funksiyalariga ega bo'lgan veb-ilova. Foydalanuvchilar profil yaratishi, post joylashi va boshqalar bilan muloqot qilishi mumkin."
          src={projectOne || "/placeholder.svg"}
        />
        <ProjectsCard
          title="Elektron tijorat veb-sayti"
          des="To'liq funksional elektron do'kon, mahsulotlarni ko'rish, savatga qo'shish va to'lov qilish imkoniyatlari bilan. Foydalanuvchi tajribasi eng yuqori darajada."
          src={projectTwo || "/placeholder.svg"}
        />
        <ProjectsCard
          title="Suhbat ilovasi"
          des="Real vaqtda xabar almashish imkoniyatiga ega bo'lgan zamonaviy suhbat ilovasi. Guruh suhbatlari va media fayllarni yuborish funksiyalari mavjud."
          src={projectThree || "/placeholder.svg"}
        />
        <ProjectsCard
          title="IJTIMOIY TARMOQ KLONI"
          des="Zamonaviy dizayn va funksionallikka ega bo'lgan ijtimoiy tarmoq platformasi. Foydalanuvchilar o'rtasida aloqa o'rnatish va kontent almashish imkoniyati."
          src={projectThree || "/placeholder.svg"}
        />
        <ProjectsCard
          title="Elektron tijorat veb-sayti"
          des="Keng assortimentdagi mahsulotlarni taklif etuvchi elektron do'kon. Qulay qidiruv va filtrlash tizimlari bilan jihozlangan."
          src={projectOne || "/placeholder.svg"}
        />
        <ProjectsCard
          title="Suhbat ilovasi"
          des="Xavfsiz va tezkor xabar almashish platformasi. End-to-end shifrlash va foydalanuvchi do'stona interfeys bilan ta'minlangan."
          src={projectTwo || "/placeholder.svg"}
        />
      </div>
    </section>
  )
}

export default Projects
