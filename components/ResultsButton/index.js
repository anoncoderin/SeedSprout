import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/components/ResultsButton/ResultsButton.module.css';

export default function ResultsButton({
  link = ''
}) {
  const router = useRouter();

  const renderButton = () => {
    return (
      <div className={styles.buttonContainer}>
        <span>Back</span>
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



