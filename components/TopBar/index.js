import Image from 'next/image'
import styles from '@/components/TopBar/TopBar.module.css'

export default function TopBar() {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <Image src='/logo/logo.svg' width={40} height={38} />
        
      </div>
      <h1 className={styles.header}>Seed Sprout</h1>
    </div>
  );
}
