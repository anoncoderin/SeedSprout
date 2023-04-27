import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Plums() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Plums</h1>
                        <Image src={"/fruitsAndVeggiesImages/plums.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Plums</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Choose a plum tree variety that is suitable for your climate and soil conditions. Plum trees come in different types, such as Japanese plums, European plums, and American plums, each with its own specific requirements.
                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Plum trees thrive in full sunlight, so choose a sunny spot in your garden for planting. Make sure the area has well-drained soil and is free from any potential frost pockets.
                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Plant plum trees in the fall or early spring when the soil is moist and the tree is dormant. Avoid planting during extreme hot or cold weather conditions.

                                </p>
                            </div>
                            <Chart
                                mNum={7}
                                ttfgNum={8}
                                dcNum={6}
                                seNum={9}
                                rtgNum={8}
                                name="Plum"
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