import { Montserrat, Monoton } from "next/font/google";

export const monoton = Monoton({
    weight: "400",
    subsets: ['latin']
})

export const montserrat = Montserrat({
    weight: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
    ],
    style: ['normal', 'italic'],
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
    preload: true,
});