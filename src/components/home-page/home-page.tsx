import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Link } from 'react-router-dom';

export interface HomePageProps {
    className?: string;
} 
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.wrapper, styles.div1)}>
                <div className={styles.paragraph}>
                    <div className={styles.text}>Our biggest sale now live</div>
                </div>
                <div className={styles.title}>Black Friday Starts Now!</div>
                <Link to="/products">
                    <button className={styles.button}>Shop sale now</button>
                </Link>
            </div>
        </div>
    );
}; 
