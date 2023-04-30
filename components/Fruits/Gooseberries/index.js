import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Gooseberries() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Gooseberries</h1>
                        <Image src={"/fruitsAndVeggiesImages/gooseberries.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Gooseberries</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Gooseberries prefer well-draining soil that is rich in organic matter. Before planting, prepare the soil by digging in compost or well-rotted manure.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Gooseberries need regular watering, especially during dry spells. Water deeply, but don't let the soil become waterlogged.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Apply a balanced fertilizer, such as 10-10-10, in early spring before new growth begins.



                                </p>
                            </div>
                            <Chart
                                mNum={5}
                                ttfgNum={7}
                                dcNum={6}
                                seNum={8}
                                rtgNum={7}
                                name="Gooseberries"
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