import classNames from 'classnames';
import styles from './site-wrapper.module.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom';
import { Feature } from '../feature/feature';
import { AboutComponent } from '../about-component/about-component';
import { Subscription } from '../subscription/subscription';
import { Partners } from '../partners/partners';
import { Video } from '../video/video';

export interface SiteWrapperProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const SiteWrapper = ({ className }: SiteWrapperProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <div className={styles.content}>
                <Outlet />
                </div>
            <Footer />
        </div>
    );
};
