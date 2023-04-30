import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"


export default function Raspberries() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Raspberries</h1>
                        <Image src={"/fruitsAndVeggiesImages/raspberries.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Raspberries</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Raspberries need plenty of sunshine, good soil drainage, and protection from wind. Choose a site that gets at least 6 hours of direct sunlight per day and is sheltered from strong winds.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Raspberries need regular watering, especially during the hot summer months. Water deeply once or twice a week, depending on the weather.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Raspberries prefer well-drained, slightly acidic soil. Test your soil and amend it with compost, peat moss, or other organic matter if necessary.

                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={6}
                                dcNum={6}
                                seNum={8}
                                rtgNum={7}
                                name="Raspberries"
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