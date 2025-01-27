import { monoton, montserrat } from '@/lib/fonts';
import styles from '../page.module.css';

const Title = () => {
    return (
        <div className={`container z-40 text-white text-center relative ${monoton.className}`}>
            <h1 className={`${styles.title} hidden 2xl:block m-0 p-0 text-8xl text-transparent absolute left-1/2 top-1/2`}>Hello &nbsp;&nbsp; There
                <span>Hello &nbsp;&nbsp; There</span>
                <span>Hello &nbsp;&nbsp; There</span>
                <span className={`${montserrat.className} text-4xl tracking-wider w-full`}>Nguyen Duc Huy</span>
            </h1>
            <h1 className={`${styles.title} block 2xl:hidden m-0 p-0 text-8xl text-transparent absolute left-1/2 top-1/2`}>Hello There
                <span>Hello There</span>
                <span>Hello There</span>
                <span className={`${montserrat.className} text-2xl tracking-wider w-full`}>Nguyen Duc Huy</span>
            </h1>
        </div>
    );
}

export default Title;