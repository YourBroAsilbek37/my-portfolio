"use client"
import { useState } from "react"
import Title from "../layouts/Title"
import ContactLeft from "./ContactLeft"

const Contact = () => {
  const [username, setUsername] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault()
    if (username === "") {
      setErrMsg("Ism kiritish majburiy!")
    } else if (phoneNumber === "") {
      setErrMsg("Telefon raqam kiritish majburiy!")
    } else if (email === "") {
      setErrMsg("Iltimos, elektron pochtangizni kiriting!")
    } else if (!emailValidation(email)) {
      setErrMsg("To'g'ri elektron pochta manzilini kiriting!")
    } else if (subject === "") {
      setErrMsg("Iltimos, mavzuni kiriting!")
    } else if (message === "") {
      setErrMsg("Xabar kiritish majburiy!")
    } else {
      setSuccessMsg(`Rahmat, hurmatli ${username}, Xabaringiz muvaffaqiyatli yuborildi!`)
      setErrMsg("")
      setUsername("")
      setPhoneNumber("")
      setEmail("")
      setSubject("")
      setMessage("")
    }
  }
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="ALOQA" des="Men bilan bog'laning" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Ismingiz</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${errMsg === "Ism kiritish majburiy!" && "outline-designColor"} contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Telefon raqam</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${errMsg === "Telefon raqam kiritish majburiy!" && "outline-designColor"} contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Elektron pochta</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Iltimos, elektron pochtangizni kiriting!" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Mavzu</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${errMsg === "Iltimos, mavzuni kiriting!" && "outline-designColor"} contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Xabar</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${errMsg === "Xabar kiritish majburiy!" && "outline-designColor"} contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Xabar yuborish
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
