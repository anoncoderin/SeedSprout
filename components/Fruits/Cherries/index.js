import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Cherries() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Cherries</h1>
                        <Image src={"/fruitsAndVeggiesImages/cherries.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Cherries</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Cherries come in different varieties, including sweet cherries and sour cherries. Sweet cherries are best for fresh eating, while sour cherries are used for baking and preserving. Choose a variety that is well-suited to your climate and growing conditions.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Cherries prefer well-drained, loamy soil that is rich in organic matter. Avoid heavy clay soils or poorly drained areas, as excess moisture can lead to root rot.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Cherries need full sunlight to thrive, so choose a location that receives at least 6-8 hours of sunlight per day. Avoid shaded areas or locations with too much wind exposure, as it can damage the trees.

                                </p>
                            </div>
                            <Chart
                                mNum={7}
                                ttfgNum={8}
                                dcNum={7}
                                seNum={9}
                                rtgNum={8}
                                name="Cherries"
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