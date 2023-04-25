import Image from 'next/image'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.homeContainer}>
          <Link href='/'>
            <div className={styles.itemContainer}>
              <Image src='/icons/HomeIcon.svg' width={30} height={30} />
              Home
            </div>
          </Link>
        </div>
        <div className={styles.aboutUsContainer}>
          <Link href='/AboutUs'>
            <div className={styles.itemContainer}>
              <Image src='/icons/AboutUsIcon.svg' width={30} height={30} />
              About Us
            </div>
          </Link>
        </div>
        <div className={styles.catalogueContainer}>
          <Link href='/ProduceCatalogue'>
            <div className={styles.itemContainer}>
              <Image src='/icons/CatalogueIcon.svg' width={30} height={30} />
              Catalogue
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}