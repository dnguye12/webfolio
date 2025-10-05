
import Badge from "../../../components/shadcn/Badge";
import { Link } from "react-router";

const ProjectCard = ({ title, imageUrl, description, summary, tags, slug }) => {

    return (
        <>
            <Link to={`/projects/${slug}`} className="relative flex h-full flex-col justify-between border border-neutral-300 dark:border-neutral-700 bg-neutral-100 hover:bg-neutral-50 dark:bg-neutral-900 drop-shadow-md cursor-pointer transition-all hover:scale-[1.02] dark:hover:bg-neutral-800 rounded-xl">
                <div className="p-4 md:p-6">
                    <div className="grid gap-2">
                        <div className="aspect-video z-[2] mb-2 inline-block overflow-hidden rounded-xl" >
                            <img src={imageUrl} alt={`Image of ${title}`} className="w-full h-full object-cover transition-transform duration-300 drop-shadow-xl" />
                        </div>

                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{title}</h2>
                        <p className="text-base text-neutral-700 dark:text-neutral-400 text-start">
                            {summary || description || ''}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {tags?.map((tag, index) => (
                                <Badge key={`project-tag-${index}`} text={tag} classes={"bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900"} />
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ProjectCard;