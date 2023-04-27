import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Persimmons() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Persimmons</h1>
                        <Image src={"/fruitsAndVeggiesImages/persimmons.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Persimmons</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Persimmons can be grown from seeds or propagated through cuttings or grafting. When planting, make sure to dig a hole large enough to accommodate the root ball and add organic matter to the soil.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Persimmons need regular watering, especially during the growing season. However, be careful not to overwater them, as this can lead to root rot.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Persimmons are ripe when they are fully colored and soft to the touch. They should be harvested before they become too soft and start to spoil.

                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={8}
                                dcNum={6}
                                seNum={9}
                                rtgNum={7}
                                name="Persimmons"
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