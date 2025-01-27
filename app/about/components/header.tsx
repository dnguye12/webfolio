import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { Home, Settings } from 'lucide-react';
import Link from 'next/link';
import { ButtonTooltip } from "@/components/button-tooltip";

const Header = () => {
    return (
        <div className='flex justify-between items-center h-16 px-8 border-b border-b-neutral-700 drop-shadow-md'>
            <span className="hidden sm:block text-md font-semibold">
                Nguyen Duc Huy
            </span>
            <span className='block sm:hidden text-md font-semibold'>Huy</span>

            <div className="flex h-full items-center">
                <ButtonTooltip
                    label="Go back to homepage"
                    side="bottom"
                    align="center"
                    sideOffset={16}
                >
                    <Link href="/">
                        <Button variant={"ghost"}>
                            <Home /> Home
                        </Button>
                    </Link>
                </ButtonTooltip>
                <Separator orientation="vertical" className="h-8 bg-neutral-700 mx-2"/>
                <ButtonTooltip
                    label="Go back to homepage"
                    side="bottom"
                    align="center"
                    sideOffset={16}
                >
                    <Link href="/projects">
                        <Button variant={"ghost"}>
                            <Settings /> Projects
                        </Button>
                    </Link>
                </ButtonTooltip>
            </div>

        </div>
    );
}

export default Header;