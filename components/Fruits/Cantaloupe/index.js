import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Cantaloupe() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Cantaloupe</h1>
                        <Image src={"/fruitsAndVeggiesImages/cantalope.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Cantaloupe</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Cantaloupe plants need full sunlight, so choose a sunny spot in your garden that receives at least 6-8 hours of direct sunlight per day. The area should also have well-drained soil.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Cantaloupes are warm-season crops and need warm soil to germinate and grow properly. Plant cantaloupe seeds or seedlings after the last frost date in your area when the soil temperature has reached at least 60°F (15°C).

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Cantaloupe plants need enough space to grow and spread out. Plant the seeds or seedlings about 3-4 feet apart in rows, or provide enough space for the vines to spread out if planting in a mound or hill.
                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={8}
                                dcNum={6}
                                seNum={9}
                                rtgNum={8}
                                name="Cantaloupe"
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