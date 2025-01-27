import { ButtonTooltip } from "@/components/button-tooltip";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
    return (
        <div className="z-40 absolute bottom-0 right-0 pr-4 pb-4">
            <ButtonTooltip
                label="Email"
                side="top"
                align="center"
                sideOffset={16}
            >
                <a href="mailto:duchuyng051@gmail.com" target="_blank">
                    <Button variant={"outline"} size={"icon"}><Mail /></Button>
                </a>
            </ButtonTooltip>
            <div className="mr-2 inline-block"></div>
            <ButtonTooltip
                label="Linkedin"
                side="top"
                align="center"
                sideOffset={16}
            >
                <a href="https://www.linkedin.com/in/duc-huy-nguyen-9392461bb/" target="_blank">
                    <Button variant={"outline"} size={"icon"}><Linkedin /></Button>
                </a>
            </ButtonTooltip>
            <div className="mr-2 inline-block"></div>
            <ButtonTooltip
                label="Github"
                side="top"
                align="center"
                sideOffset={16}
            >
                <a href="https://github.com/dnguye12" target="_blank">
                    <Button variant={"outline"} size={"icon"}><Github /></Button>
                </a>
            </ButtonTooltip>
        </div>
    );
}

export default Contact;