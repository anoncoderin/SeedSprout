import Image from 'next/image'
import styles from './SummeryItems.module.css'

export default function SummaryItems({
    arr,
}) {
    return (
        arr && arr.map((choice) => {
            if (choice == 'fruitBundle') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>You want to<br /> grow fruits</span>
                    </div>
                )
            } else if (choice == 'vegetableBundle') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>You want to<br /> grow vegetables</span>
                    </div>
                )
            } else if (choice == 'smallGarden') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>Your garden<br /> bed is small</span>
                    </div>
                )
            } else if (choice == 'largeGarden') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>Your garden<br /> bed is large</span>
                    </div>
                )
            } else if (choice == 'wateringCanLow') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>You can handle<br /> low maintenance</span>
                    </div>
                )
            } else if (choice == 'wateringCanHigh') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>You can handle<br /> high maintenance</span>
                    </div>
                )
            } else if (choice == 'springSeason') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>You want to plant<br /> for the season Spring</span>
                    </div>
                )
            } else if (choice == 'summerSeason') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>You want to plant<br /> for the season Summer</span>
                    </div>
                )
            } else if (choice == 'fallSeason') {
                return (
                    <div className={styles.itemContainer}>
                        <Image
                            src={"/graphics/" + choice + ".svg"}
                            width={180}
                            height={100}
                        />
                        <span>You want to plant<br /> for the season Fall</span>
                    </div>
                )
            }

        })

    )
}