import React from 'react';
import { CardContent, Card } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/motion/text-reveal';

interface ExperienceCardProps {
    name: string;
    company: string;
    duration: string;
    description?: string;
    tech?: string;
    className?: string;
}

function ExperienceCard({
    company,
    name,
    duration,
    description,
    tech,
    className
}: ExperienceCardProps) {
    return (
        <Card className={cn('border-none bg-transparent', className)}>
            <CardContent className="p-1">
                <div className="flex items-baseline justify-between">
                    <TextReveal as="h3" className="text-xl lg:text-3xl font-semibold">
                        {company}
                    </TextReveal>
                    <TextReveal as="span" className="text-sm font-medium">
                        {duration}
                    </TextReveal>
                </div>
                <TextReveal as="h4" className="mt-2 text-base lg:text-xl font-medium uppercase">
                    {name}
                </TextReveal>
                <TextReveal
                    as="p"
                    className="mt-2 max-w-2xl text-sm lg:text-lg font-light text-zinc-700 dark:text-zinc-400"
                >
                    {description}
                </TextReveal>
                <TextReveal as="h4" className="mt-2 text-base lg:text-xl font-medium uppercase">
                    {tech}
                </TextReveal>
                <hr className="mt-6 border-t border-border" />
            </CardContent>
        </Card>
    );
}

export default ExperienceCard;
