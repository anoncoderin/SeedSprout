import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/Image'
import styles from '@/components/NavBar/NavBar.module.css'

export default function NavBar() {
  const [overlay, setOverlay] = useState(false);

  function toggleMenu() {
    setOverlay(!overlay);
  }

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <Image src='/logo/logo.svg' width={50} height={50} />
      </div>
      <div
        className={styles.hamburgerContainer}
        onClick={() => toggleMenu()}
      >
        <Image src='/icons/hamburger.svg' width={50} height={50} />
      </div>
      {overlay && (
        <div className={styles.popupContent}>
          <div>
          <Link href='/'>
          <Image src='/icons/HomeIcon.svg' width={20} height={20} />
            Home
            </Link>
          </div>
          <div>
          <Link href='/'> 
          <Image src='/icons/AboutUsIcon.svg' width={20} height={20} />
            About Us
            </Link>
          </div>
          <div>
          <Link href='/'>
          <Image src='/icons/TakeQuizIcon.svg' width={20} height={20} />
            Take Quiz
            </Link>
          </div>
          <div>
            <Link href='/'><Image src='/icons/TutorialIcon.svg' width={20} height={20} />
            Tutorial
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
