import classNames from 'classnames';
import styles from './footer.module.scss';
import FacebookIcon from '../../assets/facebook.svg?react';
import TwitterxIcon from '../../assets/twitterx.svg?react';
import DiscordIcon from '../../assets/discord.svg?react';
import YoutubeIcon from '../../assets/youtube.svg?react';
import MediumIcon from '../../assets/medium.svg?react';
import GithubIcon from '../../assets/github.svg?react';
import LogoPng from '../../assets/logo.png';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>
                    <img src={LogoPng} alt="" />
                </div>
                <div className={styles.small}>
                    <p>
                        Nura designs headphones tuned to you. Bringing you closer to music with
                        personalised sound.
                    </p>
                </div>
            </div>
            <div className={styles.social}>
                <a href="/">
                    <TwitterxIcon className={styles.icon} />
                </a>
                <a href="/">
                    <FacebookIcon className={styles.icon} />
                </a>
                <a href="/">
                    <DiscordIcon className={styles.icon} />
                </a>
                <a href="/">
                    <YoutubeIcon className={styles.icon} />
                </a>
                <a href="/">
                    <MediumIcon className={styles.icon} />
                </a>
                <a href="/">
                    <GithubIcon className={styles.icon} />
                </a>
            </div>
        </div>
    );
};
