import classNames from 'classnames';
import styles from './subscription.module.scss';
import Df3Fe13F0B6B325C49NuranowBgQ89P1600JpegPng from '../../assets/622558df3fe13f0b6b325c49_nuranow-bg-q89-p-1600.jpeg.png';
import Fa13D866B2A2572A533RightArrowSvgPng from '../../assets/62157fa13d866b2a2572a533_right-arrow.svg.png';

export interface SubscriptionProps {
    className?: string;
}

export const Subscription = ({ className }: SubscriptionProps) => {
    return (
        <div className={classNames(styles.div, className)}>
            <div className={styles.div1}>
                <img
                    src={Df3Fe13F0B6B325C49NuranowBgQ89P1600JpegPng}
                    alt="NuraNow background"
                    className={styles.img1}
                />
                <div className={styles.wrapper}>
                    <h1 className={styles.header1}>A sound subscription</h1>
                    <p className={classNames(styles.para, styles.p1)}>
                        Experience personalised sound across our devices on a low monthly fee with
                        NuraNow. Cancel anytime.
                    </p>
                    <button className={styles.button1}>
                        <div className={styles.div}>
                            Discover NuraNow
                            <img
                                src={Fa13D866B2A2572A533RightArrowSvgPng}
                                alt=""
                                className={styles.img}
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
