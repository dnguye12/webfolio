import { useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { SECTION_TYPE } from "../tabs/constants"

import Image from "next/image"

import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import { GithubIcon, Linkedin, Mail } from "lucide-react"

const contactList = [
  {
    icon: <GithubIcon className="w-7 h-7"/>,
    link: "https://github.com/dnguye12"
  },
  {
    icon: <Mail className="w-7 h-7"/>,
    email: "mailto:duchuyng051@gmail.com"
  },
  {
    icon: <Linkedin className="w-7 h-7"/>,
    email: "https://www.linkedin.com/in/duc-huy-nguyen-9392461bb/"
  },
]

const threshold: number[] = []
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i)
}

const About = () => {
  const { ref, entry } = useInView({
    threshold
  })

  const profileRadius = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
      return "50%"
    }
    const radius = entry.intersectionRatio * 50
    return `${radius < 10 ? 10 : radius}%`
  }, [entry?.intersectionRatio])

  return (
    <div
      ref={ref}
      id={SECTION_TYPE.ABOUT}
      className="flex flex-col items-center justify-center pt-28 w-[90%] max-w-[840px] mx-auto"
    >
      <div
        className={classNames("relative cursor-pointer w-64 h-64 group")}
      >
        <Image
          src="/profile_cover-pixelicious.png"
          alt="profile"
          fill
          className="w-full h-full absolute top-0 left-0 z-[1] transition-all duration-300 group-hover:rotate-y-180"
          style={{
            borderRadius: profileRadius,
            backfaceVisibility: "hidden",
          }}
        />
        <Image
          src="/profile_cover.png"
          alt="profile"
          fill
          className="w-full h-full absolute top-0 left-0 transition-all duration-300 group-hover:rotate-y-180"
          style={{
            borderRadius: profileRadius
          }}
        />
      </div>

      <div
        className={classNames("text-2xl spacing-word-1", BreeSerifFont.className)}
        style={{
          wordSpacing: "0.25rem"
        }}
      >
        <div className="flex items-center justify-center gap-x-3 mt-16 mb-10">
          {
            contactList.map((item, index) => (
              <a
                href={item.email || item.link}
                target="_blank"
                className="p-1 border-black rounded-lg border-2 cursor-pointer hover:scale-110 transition-all dark:border-white"
                key={index}
              >
                {item.icon}
              </a>
            ))
          }
        </div>

        Hello, I{"'"}m Nguyen Duc Huy, currently a Master 1 student specializing in Computer Human Interaction at Paris Saclay University, with a strong passion for interaction design, graphics, and creativity.

        <div className="mt-6">
        This passion bridges my curiosity for
        programming with my artistic creativity.
        </div>
        
        <div className="mt-6">
          If you{"'"}d like to get to know me better, please scroll down.
        </div>
      </div>
    </div>
  )
}

export default About
