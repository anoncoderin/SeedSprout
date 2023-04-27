import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Kiwi() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Kiwi</h1>
                        <Image src={"/fruitsAndVeggiesImages/kiwi.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Kiwi</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Kiwi vines require full sunlight to thrive, so choose a sunny spot in your garden for planting. Make sure the area has well-drained soil and is protected from strong winds. 

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Kiwi vines are dioecious, meaning that they have separate male and female plants. To ensure fruit production, you will need to plant both male and female vines. The ratio of male to female plants should be about 1:8, meaning that for every 8 female vines, you will need one male vine.




                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Kiwi vines are vigorous climbers and require sturdy support to grow properly. A trellis or pergola is typically used to provide support for the vines to grow and develop.




                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={8}
                                dcNum={7}
                                seNum={8}
                                rtgNum={9}
                                name="Kiwi"
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