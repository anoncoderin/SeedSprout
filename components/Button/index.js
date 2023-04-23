import { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/Button/Button.module.css';

export default function Button({
    link = '',
    text = '',
    size,
    color
}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const getButtonColor = () => {
        if (isActive) {
            return color === 'var(--mantisGreen)' ? 'var(--polyGreen)' : 'var(--darkBrown)';
        }
        return color;
    };

    return (
        <>
            {link.length > 0 ? (
                <Link
                    className={styles.linkContainer}
                    href={link}
                    style={{ textDecoration: 'none', backgroundColor: `${getButtonColor()}` }}
                >
                    <div
                        className={styles.buttonContainer}
                        style={{ width: size[0], height: size[1] }}
                        onClick={ () => handleClick()}
                    >
                        <span>{text}</span>
                    </div>
                </Link>
            ) : (
                <div
                    className={styles.linkContainer}
                    style={{ textDecoration: 'none', backgroundColor: `${getButtonColor()}` }}
                >
                    <div
                        className={styles.buttonContainer}
                        style={{ width: size[0], height: size[1] }}
                        onClick={ () => handleClick()}
                    >
                        <span>{text}</span>
                    </div>
                </div>
            )}
        </>
    );
}
