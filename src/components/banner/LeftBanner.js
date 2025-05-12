"use client"
import { useEffect } from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaReact, FaVk, FaTelegram, FaJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiGmail } from "react-icons/si"
import AOS from "aos"
import "aos/dist/aos.css"

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Dasturchi"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    delaySpeed: 2000,
  })

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi millisekundlarda
      once: true, // Animatsiya pastga aylanganda bir marta sodir bo'ladi
    })
  }, [])

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5" data-aos="fade-up">
        <h4 className="text-lg font-normal">MENING DUNYOIMGA XUSH KELIBSIZ</h4>
        <h1 className="text-6xl font-bold text-white">
          Salom, men <span className="text-designColor capitalize">Avenox</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Men yuqori samarali veb-ilovalarni yaratishga ishtiyoqli frontend dasturchiman. Zamonaviy freymvorklar va eng
          yaxshi amaliyotlarda tajribaga ega bo'lib, silliq va kengaytiriladigan yechimlarni yarataman. Kiberhavfsizlik
          har doim ustuvor vazifa bo'lib, har bir loyiha ham samarali, ham xavfsiz bo'lishini ta'minlayman.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between" data-aos="fade-up">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Meni topish mumkin</h2>
          <div className="flex gap-4">
            <a href="https://t.me/Asilbek037" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaTelegram />
              </span>
            </a>
            <a href="mailto:codewiizard@gmail.com">
              <span className="bannerIcon">
                <SiGmail />
              </span>
            </a>
            <a href="https://www.tiktok.com/@zetsucoder" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaVk />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">ENG YAXSHI KO'NIKMALAR</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBanner
