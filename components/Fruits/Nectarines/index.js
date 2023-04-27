import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Nectarine() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Nectarine</h1>
                        <Image src={"/fruitsAndVeggiesImages/nectarine.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Nectarine</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Nectarines require full sun to grow, so choose a location in your garden that receives at least 6-8 hours of sunlight a day. Also, make sure the soil is well-draining to prevent waterlogging.



                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Nectarines require regular watering, especially during the growing season. Water deeply once a week, and increase the frequency during hot, dry weather. Fertilize in spring with a balanced fertilizer, and again in midsummer with a high-potassium fertilizer to encourage fruit production.






                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Nectarines are ready to harvest when they are fully ripe and have a deep, rich color. They should come off the tree easily when gently twisted. Harvest them all at once or over several pickings, depending on the size of your crop.






                                </p>
                            </div>
                            <Chart
                                mNum={5}
                                ttfgNum={8}
                                dcNum={7}
                                seNum={9}
                                rtgNum={7}
                                name="Nectarine"
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