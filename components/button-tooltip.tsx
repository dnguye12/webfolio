import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


interface ButtonTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
}

export const ButtonTooltip = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset
}: ButtonTooltipProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100} >
                <TooltipTrigger asChild >
                    {children}
                </TooltipTrigger>
                < TooltipContent className="text-white bg-black border-black" side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} >
                    <p className="font-semibold capitalize" >
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}