import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import FaceSVG from "@/assets/face.svg"

const PageFooter = () => {
  return (
    <div
      className='flex flex-col pt-56 pb-28 mx-auto items-center justify-center w-[90%] max-w-[840px]'
      style={{
        wordSpacing: "0.25rem"
      }}
    >
      <div className='relative'>
        <FaceSVG className={classNames("w-20 h-20 twinkle-display")} />
        <FaceSVG className={classNames("w-20 h-20 twinkle-style")} />
      </div>
      <span className={classNames("text-2xl mt-6", BreeSerifFont.className)}>
        {
          "Thank you very much for visiting my personal website! I appreciate your time and interest. Feel free to explore, connect, and reach out if you have any questions or opportunities to discuss. Have a great day!"
        }
      </span>
    </div>
  )
}

export default PageFooter
