
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


const About = () => {
    return (
        <div className="z-40">
            <Dialog>
                <DialogTrigger>
                    
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription className="flex flex-col items-center">
                            <Avatar className="w-32 h-32 drop-shadow-md">
                                <AvatarImage src="./profile_cover.png" alt="Nguyen Duc Huy" />
                                <AvatarFallback>Huy</AvatarFallback>
                            </Avatar>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default About;