import { ButtonTooltip } from '@/components/button-tooltip';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { getYearDisplay } from '@/lib/utils';

export default function Footer() {
  const { startYear } = { startYear: 2025 };
  const yearDisplay = getYearDisplay(startYear);

  return (
    <footer className='bg-background border-t border-t-neutral-700'>
      <div className='flex items-center justify-between mx-auto text-muted-foreground h-16 px-4'>
        <p className="text-lg">
          Portfolio © {yearDisplay} - Nguyen Duc Huy
        </p>
        <div>
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
      </div>
    </footer>
  );
}
