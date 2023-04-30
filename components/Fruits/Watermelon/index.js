import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Watermelon() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Watermelon</h1>
                        <Image src={"/fruitsAndVeggiesImages/watermelon.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Watermelon</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Watermelons need full sun and warm soil to grow properly. Pick a location in your garden that receives at least six to eight hours of direct sunlight per day.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Watermelons require a lot of water to grow, so make sure to water them deeply and regularly. Avoid getting water on the leaves, as this can lead to disease.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Watermelons are ripe when the underside turns yellow and the stem starts to dry out. You can also tap the fruit and listen for a hollow sound to determine if it's ripe.



                                </p>
                            </div>
                            <Chart
                                mNum={7}
                                ttfgNum={9}
                                dcNum={6}
                                seNum={10}
                                rtgNum={9}
                                name="Watermelon"
                            />
                        </div>
                        <div>
                        <ResultsButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}