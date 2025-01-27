
import TextReveal from "@/components/motion/text-reveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, LoaderCircle } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    imageUrl?: string;
    description: string;
    summary: string;
    tags: string[];
    features: string[];
    techStack: {
        [key: string]: string | undefined
    }
    liveUrl?: string;
    sourceCodeUrl: string
}

const ProjectCard = ({
    title, imageUrl, description, summary, tags, features, techStack, liveUrl, sourceCodeUrl
}: ProjectCardProps) => {
    return (

        <Dialog>
            <DialogTrigger>
                <Card
                    className={cn(
                        'relative flex h-full flex-col justify-between border border-muted bg-neutral-900 drop-shadow-md cursor-pointer transition hover:scale-105 hover:bg-neutral-800',
                    )}
                >
                    <CardContent className="p-4 md:p-6">
                        <div className="grid gap-2">
                            <AspectRatio
                                ratio={16 / 9}
                                className="z-[2] mb-2 inline-block overflow-hidden rounded-md"
                            >
                                {
                                    imageUrl
                                        ? (
                                            <Image
                                                src={imageUrl}
                                                alt={`Image of ${title}`}
                                                fill
                                                className="object-cover transition-transform duration-300 drop-shadow-md hover:scale-105"
                                            />
                                        )
                                        :
                                        (
                                            <div className="w-full h-full bg-neutral-950 flex justify-center items-center drop-shadow-md" >
                                                <LoaderCircle className="animate-spin w-8 h-8" />
                                            </div>

                                        )
                                }
                            </AspectRatio>
                            <TextReveal className="text-xl font-bold" as="h2">
                                {title}
                            </TextReveal>
                            <TextReveal
                                as="p"
                                className="text-base text-gray-400 text-start"
                            >
                                {summary || description || ''}
                            </TextReveal>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {tags?.map((tag, index) => (
                                    <Badge key={`project-tag_${index}`} className="drop-shadow-md">{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="container max-w-3xl lg:max-w-5xl xl:max-w-7xl max-h-[calc(100vh-4rem)] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        <div className="space-y-6">
                            <div className="flex flex-col gap-3">
                                <div className="text-3xl font-semibold">{title}</div>
                                <div className="font-medium text-base">{summary}</div>
                            </div>
                            <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
                                {liveUrl && (
                                    <Button asChild>
                                        <a href={liveUrl} target="_blank" >Visit Website<ArrowUpRight className="ml-1 size-5" /></a>
                                    </Button>
                                )}
                                {sourceCodeUrl && (
                                    <Button asChild>
                                        <a href={sourceCodeUrl} target="_blank" >Github<Github className="ml-1 size-5" /></a>
                                    </Button>
                                )}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {tags?.map((tag, index) => (
                                    <Badge
                                        key={`project-tag_${index}`}
                                        variant={'secondary'}
                                        className="px-3 py-1 text-sm"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                width={1280}
                                height={832}
                                alt={`Image of ${title}`}
                                className="my-6 aspect-video h-auto w-full rounded-lg object-cover drop-shadow-md"
                            />
                        )
                            :
                            (
                                <Separator className="my-6 bg-neutral-700" />
                            )}
                        <div className="">
                            <p className="text-white text-base font-medium mb-6">{description}</p>

                            <h4 className="text-white text-2xl font-semibold mb-2">Features</h4>
                            <ul className="list-disc mb-6">
                                {
                                    features.map((f, i) => (
                                        <li key={`f-${i}`} className="text-white/80 text-base font-medium ml-6">{f}</li>
                                    ))
                                }
                            </ul>

                            <h4 className="text-white text-2xl font-semibold mb-2">Tech Stack</h4>
                            <ul className="list-disc">
                                {
                                    Object.entries(techStack).map(([k, v], i) => (
                                        <li key={`ts-${i}`} className="text-white/80 text-base font-medium ml-6">
                                            <b className="capitalize text-white font-semibold">{k} : </b>{v}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}

export default ProjectCard;
