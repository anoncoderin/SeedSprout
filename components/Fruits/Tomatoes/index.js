import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Tomatoes() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Tomatoes</h1>
                        <Image src={"/fruitsAndVeggiesImages/tomatoes.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Tomatoes</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Tomatoes require at least 6-8 hours of direct sunlight per day. They also need well-drained soil that is rich in organic matter. Avoid planting tomatoes in areas with poor drainage, heavy clay soil, or where water tends to collect.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Tomatoes need consistent moisture to grow and produce fruit. Water deeply and regularly, especially during hot, dry weather. Avoid getting the leaves wet, as this can lead to disease.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Most tomato varieties require support to grow upright and prevent the fruit from touching the ground, which can lead to rot and disease. Use stakes, cages, or trellises to support the plants.


                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={7}
                                dcNum={5}
                                seNum={8}
                                rtgNum={5}
                                name="Tomatoes"
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