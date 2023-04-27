import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Cranberries() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Cranberries</h1>
                        <Image src={"/fruitsAndVeggiesImages/cranberries.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Cranberries</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Cranberries grow best in a sunny location with well-drained soil that is rich in organic matter. Avoid areas with heavy clay soil, as they can hold too much water and cause the cranberry plants to rot.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Cranberries need regular watering, especially during dry spells. Keep the soil moist but not waterlogged, as too much water can lead to root rot.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Keep your cranberry plants free of weeds and prune any dead or diseased branches regularly. This will help keep your plants healthy and productive.


                                </p>
                            </div>
                            <Chart
                                mNum={7}
                                ttfgNum={8}
                                dcNum={6}
                                seNum={9}
                                rtgNum={8}
                                name="Cranberries"
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