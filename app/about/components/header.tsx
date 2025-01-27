import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex justify-between items-center h-16 px-8 border-b border-b-neutral-700 drop-shadow-md'>
            <span className="text-md font-semibold">
                Nguyen Duc Huy
            </span>

            <Sheet>
                <SheetTrigger>
                    <Button variant={"ghost"} className='text-md font-semibold'>
                        Menu <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent className="border-l-neutral-700 drop-shadow-md">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <Separator className="my-4 bg-neutral-700" decorative/>
                        <SheetDescription>
                            <div className='flex flex-col group py-4'>
                                <Link href="/" className="my-2 uppercase text-7xl transition text-white hover:group-hover:text-white hover:group-hover:blur-none group-hover:text-muted-foreground group-hover:blur-sm">Home</Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
}

export default Header;