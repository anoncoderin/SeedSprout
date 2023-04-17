import Image from 'next/image'
import Link from 'next/link'
import styles from './NavBarBottom.module.css'

export default function NavBarBottom(){
    return(
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
            <div className={styles.takeQuizContainer}>
            <Link href='/Tutorial'>
              <div className={styles.itemContainer}>
                <Image src='/icons/TakeQuizIcon.svg' width={30} height={30} />
                Quiz
              </div>
            </Link>
            </div>
        </div>
        </>
    )
}