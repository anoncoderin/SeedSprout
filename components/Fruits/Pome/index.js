import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Pomegranate() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Pomegranate</h1>
                        <Image src={"/fruitsAndVeggiesImages/pome.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Pomegranate</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                    Plant pomegranate trees in a location with full sun exposure, and well-draining soil. Dig a hole twice as wide and as deep as the root ball, and backfill with soil mixed with compost or other organic matter.
                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                    Pomegranates are drought-tolerant but require regular watering during the first two years of growth. Water deeply once a week during the growing season, and reduce watering in the winter.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                    Pomegranates are ready for harvest when they are fully ripe, usually in the fall. The fruit should be firm and heavy for its size, with a deep red color. To harvest, cut the fruit from the tree with pruning shears.


                                </p>
                            </div>
                            <Chart
                                mNum={4}
                                ttfgNum={9}
                                dcNum={6}
                                seNum={9}
                                rtgNum={8}
                                name="Pomegranate"
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