import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            date={experience.date}
            dateClassName={"text-neutral-900 dark:text-white transition-all !pb-0 md:!pb-3"}
            icon={
                <div className='flex justify-center items-center w-full h-full p-2'>
                    <img
                        src={`/exp/${experience.iconSrc}`}
                        alt={experience.company_name}
                        className='w-full h-full rounded-full object-fill'
                    />
                </div>
            }
            iconStyle={{ background: experience.iconBg, boxShadow: "0 0 0 1px #d4d4d4" }}
            className="vertElement drop-shadow-md !shadow-none"
        >
            <div className="">
                <h3 className='text-xl font-bold text-neutral-900 dark:text-white transition-all'>{experience.title}</h3>
                <p
                    className='text-neutral-700 dark:text-neutral-400 font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-neutral-900 dark:text-white transition-all text-sm pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
}

export default ExperienceCard;