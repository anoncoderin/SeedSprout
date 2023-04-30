import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Cucumbers() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Cucumbers</h1>
                        <Image src={"/fruitsAndVeggiesImages/cucumbers.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Cucumbers</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Cucumbers need at least 6-8 hours of direct sunlight daily, so choose a spot in your garden that receives plenty of sunshine.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Plant the seeds about 1 inch deep and 6 inches apart. If you're planting in rows, space them about 3 feet apart.



                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Cucumbers are ready to be harvested when they're about 6-8 inches long. Harvest them regularly to encourage more fruit production.



                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={7}
                                dcNum={6}
                                seNum={8}
                                rtgNum={6}
                                name="Cucumbers"
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