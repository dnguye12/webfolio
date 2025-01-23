import classNames from "classnames"
import { MonotonFont, BreeSerifFont } from "@/common/font"
import { SECTION_TYPE } from "../tabs/constants"
import Link from "../link"
import Image from "next/image"

const projectList = [
  {
    img: "/projects/div.avif",
    title: "Dividend Insight",
    link: "Work in progress",
    github: "",
    desc: "Dividend Insight is a cutting-edge web application built and designed to provide comprehensive company stock information with price estimations, performance feedback and analysis. It features algorithms for stock performance analysis and interactive data visualization tools, offering users an intuitive financial insight experience.",
    author: "Me"
  },
  {
    img: "/projects/miro.png",
    title: "Fullstack Miro Copy",
    link: "https://miro-clone-liard.vercel.app/",
    desc: "Fullstack Miro Copy is a real-time collaborative web application, designed to provide a seamless shared whiteboard experience. Whether for brainstorming sessions, creative projects, or team planning, this ensures an interactive and intuitive environment, empowering users to collaborate efficiently and in real time.",
    author: "Me"
  },
  {
    img: "/projects/discord.png",
    title: "Fullstack Discord Copy",
    link: "https://discord-backend-tlyr.onrender.com/",
    desc: "Fullstack Discord Copy is a real-time communication platform, offering seamless real-time messaging, video and audio calls, and dedicated servers with isolated channels for organized communication. Key features include messaging, file and image uploads (supporting large files), and robust server and channel management tools. Fullstack Discord Copy provides a dynamic and user-friendly environment for connecting and communicating effectively.",
    author: "Me"
  },
  {
    img: "/projects/icremental-paradise.png",
    title: "Increment Paradise",
    link: "https://shop.incrementalparadise.com/",
    desc: "Online store for a Minecraft server, allowing users to purchase ranks and upgrades. Features: an admin panel to manage website and products, login system for players, dynamic offers based on purchase history, databases to hold information on users and products and real-time updates synced with the Minecraft server",
    author: "Me"
  },
]

const Projects = () => {
  return (
    <div id={SECTION_TYPE.PROJECTS} className="w-full mt-32 pt-40 relative">
      <div
        className={classNames("w-full text-center text-6xl", MonotonFont.className)}
      >
        Notable<span className="ml-8"></span>Projects
      </div>

      <div className="relative w-full">
        <div
          className="w-[90%] max-w-[1040px] mt-20 mx-auto relative rounded-3xl"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
          }}
        >
          <div className="relative z-[2]">
            {
              projectList.map((project, index) => (
                <div
                  className="flex px-8 gap-x-6 relative py-12"
                  key={index}
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    wordSpacing: "0.2rem"
                  }}
                >
                  <div className={classNames("w-1/2 flex-1", BreeSerifFont.className)}>
                    <div className="text-4xl text-center font-black">{project.title}</div>

                    <Image
                      src={project.img}
                      className="w-full h-auto rounded-xl my-5 mx-auto hidden max-600:block dark:opacity-80"
                      alt="projectImage"
                      width={480}
                      height={480}
                    />

                    {
                      project.link && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Link: </span>
                          {
                            project.link === "Work in progress"
                              ?
                              (
                                <i>{project.link}</i>
                              )
                              :
                              (
                                <Link href={project.link} />
                              )
                          }

                        </div>
                      )
                    }
                    {
                      project.github && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Github: </span>
                          <Link href={project.github} />
                        </div>
                      )
                    }
                    <div className="text-base mt-2 flex">
                      <span className="font-semibold shrink-0 w-16">Desc: </span>
                      <span>
                        {project.desc}
                      </span>
                    </div>
                    {
                      project.author && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Author: </span>
                          <span className="whitespace-pre-line">
                            {project.author}
                          </span>
                        </div>
                      )
                    }
                  </div>

                  <div className="w-1/2 h-fit shrink-0 sticky top-20 justify-center flex max-600:hidden dark:opacity-80">
                    <Image
                      src={project.img}
                      width={480}
                      height={480}
                      className="w-full h-fit rounded-xl"
                      alt="projectImg"
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
