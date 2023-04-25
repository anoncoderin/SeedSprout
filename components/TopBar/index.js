import Image from 'next/image'
import styles from '@/components/TopBar/TopBar.module.css'
import Link from 'next/link'

export default function TopBar() {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <Link href='/'><Image src='/logo/logo.svg' width={40} height={38} /></Link>
      </div>
      <h1 className={styles.header}>Seed Sprout</h1>
      <div className={styles.space}></div>
    </div>
  );
}
