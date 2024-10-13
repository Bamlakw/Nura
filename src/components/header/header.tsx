import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoPng from '../../assets/logo.png';
import { useState } from 'react';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close the menu when clicking outside of it
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <NavLink to="/" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                <div className={styles.logo}>
                    <img src={LogoPng} alt="Logo" />
                </div>
            </NavLink>

            {/* Hamburger Icon for Mobile */}
            <div className={styles.hamburger} onClick={toggleMobileMenu}>
                &#9776;
            </div>

            {/* Desktop Menu */}
            <div className={styles.menu}>
                <NavLink to="/" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                    Home
                </NavLink>
                <NavLink to="/Products" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                    Products
                </NavLink>
                <NavLink to="/subscription" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                    Subscription
                </NavLink>
                <NavLink to="/AboutComponent" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                    Why nura
                </NavLink>
                <NavLink to="/Support" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                    Support
                </NavLink>
            </div>

            {/* Mobile Menu (toggle visibility) */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu} onClick={closeMobileMenu}>
                    <NavLink to="/" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                        Home
                    </NavLink>
                    <NavLink to="/Products" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                        Products
                    </NavLink>
                    <NavLink to="/subscription" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                        Subscription
                    </NavLink>
                    <NavLink to="/AboutComponent" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                        Why nura
                    </NavLink>
                    <NavLink to="/Support" className={({ isActive }) => classNames({ [styles.active]: isActive })}>
                        Support
                    </NavLink>
                </div>
            )}
        </div>
    );
};
