import { getYearDisplay } from '@/lib/utils';

export default function Footer() {
  const { startYear } = {startYear: 2025};
  const yearDisplay = getYearDisplay(startYear);

  return (
    <footer className='bg-muted/30'>
      <div className='flex container items-end justify-between py-10 mx-auto text-muted-foreground'>
      <h1 className="text-[18vw] leading-[0.8] md:text-[16vw] lg:text-[18vw] xl:text-[20vw]">
        Portfolio
      </h1>
      <p className="text-xs sm:mt-0 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        © {yearDisplay} Huy
      </p>
      </div>
    </footer>
  );
}
