import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Honeydew() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Honeydew</h1>
                        <Image src={"/fruitsAndVeggiesImages/honeydew.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Honeydew</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Purchase high-quality honeydew seeds from a reputable source. Make sure the seeds are fresh and have a high germination rate.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Honeydew melons require consistent watering to grow well. Water deeply once or twice a week, depending on rainfall and the moisture level in the soil.




                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Honeydew melons grow on sprawling vines that can become heavy with fruit. Providing support for the vines, such as with a trellis or netting, can help prevent the fruit from touching the ground and becoming damaged.




                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={8}
                                dcNum={6}
                                seNum={9}
                                rtgNum={7}
                                name="Honeydew"
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