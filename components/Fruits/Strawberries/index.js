import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Strawberries() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Strawberries</h1>
                        <Image src={"/fruitsAndVeggiesImages/strawberries.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Strawberries</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Strawberries need plenty of sunlight to grow, so choose a spot in your garden that gets at least 6 hours of direct sunlight each day. They also prefer well-drained soil that is rich in organic matter.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Strawberries need consistent moisture, especially when the plants are fruiting. Water deeply once or twice a week, depending on how much rain you get.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Pick your strawberries as soon as they are ripe, usually when they are fully red. Don't let them over-ripen on the plant or they may attract pests or start to rot. Gently remove the berries from the plant by pinching the stem just above the fruit.

                                </p>
                            </div>
                            <Chart
                                mNum={5}
                                ttfgNum={6}
                                dcNum={6}
                                seNum={8}
                                rtgNum={4}
                                name="Strawberries"
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