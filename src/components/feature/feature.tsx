import classNames from 'classnames';
import styles from './feature.module.scss';
import SubscriptionimageSvg from '../../assets/subscriptionimage.svg';
import Af695Ed11D4D7998Dc7FeaturedNpP500JpgPng from '../../assets/63647af695ed11d4d7998dc7_featured-np-p-500.jpg.png';
import Ae223D8A05077F69034FeaturedNtP500JpgPng from '../../assets/63647ae223d8a05077f69034_featured-nt-p-500.jpg.png';
import B00Bb5Bde0669A9Dea7FeaturedNbP500JpgPng from '../../assets/63647b00bb5bde0669a9dea7_featured-nb-p-500.jpg.png';
import B44578A55D620B50F6Df4FeaturedU00BP500JpgPng from '../../assets/637b44578a55d620b50f6df4_featured-u00b-p-500.jpg.png';
import Fa13D866B2A2572A533RightArrowSvgPng from '../../assets/62157fa13d866b2a2572a533_right-arrow.svg.png';

export interface FeatureProps {
    className?: string;
}

export const Feature = ({ className }: FeatureProps) => {
    return (
        <div className={classNames(styles.root, styles.div1)}>
            <h1 className={classNames(styles.title, styles.header1)}>Featured Discounts</h1>
            <div className={styles.div}>
                <div className={styles.card}>
                    <div className={styles.discount}>25% Off</div>
                    <img
                        alt="title"
                        className={styles.cardImg}
                        src={Af695Ed11D4D7998Dc7FeaturedNpP500JpgPng}
                    />
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>Nuraphone</h5>
                        <p className={styles.cardPrice}>
                            <span className={styles.oldPrice}>$399</span> $299.25
                        </p>
                        <button className={styles.btn}>
                            <div className={styles.div}>
                                SHOP NOW
                                <img
                                    className={styles.img}
                                    src={Fa13D866B2A2572A533RightArrowSvgPng}
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.discount}>25% Off</div>
                    <img
                        alt="title"
                        className={styles.cardImg}
                        src={Ae223D8A05077F69034FeaturedNtP500JpgPng}
                    />
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>NuraTrue</h5>
                        <p className={styles.cardPrice}>
                            <span className={styles.oldPrice}>$199.99</span>$139.99
                        </p>
                        <button className={styles.btn}>
                            <div className={styles.div}>
                                SHOP NOW
                                <img
                                    className={styles.img}
                                    src={Fa13D866B2A2572A533RightArrowSvgPng}
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.discount}>25% Off</div>
                    <img
                        alt="title"
                        className={styles.cardImg}
                        src={B00Bb5Bde0669A9Dea7FeaturedNbP500JpgPng}
                    />
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>NuraBuds 2</h5>
                        <p className={styles.cardPrice}>
                            <span className={styles.oldPrice}>$119</span>$89.25
                        </p>
                        <button className={styles.btn}>
                            <div className={styles.div}>
                                SHOP NOW
                                <img
                                    className={styles.img}
                                    src={Fa13D866B2A2572A533RightArrowSvgPng}
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.discount}>25% Off</div>
                    <img
                        alt="title"
                        className={styles.cardImg}
                        src={B44578A55D620B50F6Df4FeaturedU00BP500JpgPng}
                    />
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>Nura Bluetooth® 5.3 Audio Transmitter</h5>
                        <p className={styles.cardPrice}>
                            <span className={styles.oldPrice}>$59</span>$44.25
                        </p>
                        <button className={styles.btn}>
                            <div className={styles.div}>
                                SHOP NOW
                                <img
                                    className={styles.img}
                                    src={Fa13D866B2A2572A533RightArrowSvgPng}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
