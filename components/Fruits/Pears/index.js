import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Pears() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Pears</h1>
                        <Image src={"/fruitsAndVeggiesImages/pears.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Pears</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Pears grow best in well-drained soil that is rich in organic matter. Make sure the soil pH is between 6.0 and 7.0.
                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Young pear trees need regular watering, especially during the first two years after planting. Water deeply once or twice a week, depending on the weather and soil moisture.
                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Prune pear trees annually to keep them healthy and productive. Remove any dead, diseased, or broken branches. Thin out crowded branches to allow for good air circulation and light penetration.
                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={8}
                                dcNum={7}
                                seNum={9}
                                rtgNum={7}
                                name="Pears"
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