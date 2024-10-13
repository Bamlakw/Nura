import classNames from 'classnames';
import styles from './about-component.module.scss';
import Group7Png from '../../assets/group 7.png';
import Fa13D866B2A2572A533RightArrowSvgPng from '../../assets/62157fa13d866b2a2572a533_right-arrow.svg.png';

export interface AboutComponentProps {
    className?: string;
}

export const AboutComponent = ({ className }: AboutComponentProps) => {
    return (
        <div className={styles.div2}>
            <div className={styles.root}>
                <div className={styles.divimg}>
                    <img alt="" src={Group7Png} />
                </div>
                <div className={styles.textwrapper}>
                    <h1 className={styles.heading}>For your ears only.</h1>
                    <p className={styles.para1}>
                        Normal hearing varies significantly from person to person, and these
                        variations make a big difference to how you experience music.
                    </p>
                    <p className={styles.para1}>
                        The first time you use Nura earbuds, they measure your hearing to create
                        your personalised hearing profile.
                    </p>
                    <button className={styles.btn}>
                        <div className={classNames(styles.div, styles.div1)}>
                            LEARN MORE
                            <img src={Fa13D866B2A2572A533RightArrowSvgPng} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
