import classNames from 'classnames';
import styles from './video.module.scss';

export interface VideoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Video = ({ className }: VideoProps) => {
    return <div className={classNames(styles.root, className)}>Video</div>;
};
