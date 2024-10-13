import classNames from 'classnames';
import styles from './partners.module.scss';
import PartnerPng from '../../assets/partner.png';

export interface PartnersProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Partners = ({ className }: PartnersProps) => {
    return (
        <div className={styles.div}>
            <img src={PartnerPng} alt="" className={styles.img} />
        </div>
    );
};
