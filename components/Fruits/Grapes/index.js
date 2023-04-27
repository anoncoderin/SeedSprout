import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Grapes() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Grapes</h1>
                        <Image src={"/fruitsAndVeggiesImages/grapes.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Grapes</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Grapes need plenty of sunshine, good soil drainage, and protection from strong winds. Look for a spot that gets at least 6 hours of direct sunlight per day and has well-draining soil.



                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p> 
                                There are many varieties of grapes available, and some are better suited for certain climates than others. Check with your local nursery or agricultural extension office to find out which varieties will grow best in your area.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Grapes need regular watering, especially during hot, dry weather. Water deeply but infrequently, and make sure the soil is well-drained to avoid waterlogged roots.



                                </p>
                            </div>
                            <Chart
                                mNum={5}
                                ttfgNum={8}
                                dcNum={6}
                                seNum={9}
                                rtgNum={7}
                                name="Grapes"
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