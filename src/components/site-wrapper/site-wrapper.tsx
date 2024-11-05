import classNames from 'classnames';
import styles from './site-wrapper.module.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom';

export interface SiteWrapperProps {
    className?: string;
}


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
