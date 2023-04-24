import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Blackberries() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Blackberries</h1>
                        <Image src={"/fruitsAndVeggiesImages/blackberries.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Blackberries</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                    Blackberries need regular watering, especially during dry periods. Aim to keep the soil moist but not waterlogged, as excessive moisture can lead to root rot.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                    Blackberries are ripe when they turn black and are easily pulled from the plant. Be sure to pick them before they become overripe, as they can quickly turn mushy and spoil.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                    Blackberries need at least six hours of direct sunlight per day to grow and produce fruit.
                                </p>
                            </div>
                            <Chart
                                mNum={5}
                                ttfgNum={7}
                                dcNum={6}
                                seNum={8}
                                rtgNum={6}
                                name="Blackberries"
                            />
                        </div>
                        <div>
                            {" "}
                            <button onClick={() => router.back()}>Back</button>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
