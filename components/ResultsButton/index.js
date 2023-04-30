import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // import the useRouter hook
import styles from '@/components/Button/Button.module.css';

export default function Button({
  link = '',
  text = '',
  size,
  color
}) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter(); // initialize the useRouter hook

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const getButtonColor = () => {
    if (isActive) {
      return color === 'var(--mantisGreen)';
    }
    return color;
  };

  const renderButton = () => {
    return (
      <div
        className={styles.linkContainer}
        style={{ textDecoration: 'none', backgroundColor: 'var(--mantisGreen)' }}
      >
        <div
          className={styles.buttonContainer}
          style={{ width: 2, height: 35 }}
          onClick={() => handleClick()}
        >
          <span>Back</span>
        </div>
      </div>
    );
  };

  return (
    <>
      {link.length > 0 ? (
        <Link href={link}>
          {renderButton()}
        </Link>
      ) : (
        <div onClick={() => router.back()}>
          {renderButton()}
        </div>
      )}
    </>
  );
}
