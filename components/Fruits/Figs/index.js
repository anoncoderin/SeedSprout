import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Figs() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Figs</h1>
                        <Image src={"/fruitsAndVeggiesImages/figs.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Figs</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Figs prefer full sun and well-drained soil. They can grow in a range of soils but do best in soils that are rich in organic matter. Make sure to plant your fig tree in a location that gets at least six hours of sunlight a day.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Figs require regular watering, especially during the growing season. Water deeply once a week, and more often during hot, dry weather.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Figs are ready to harvest when they are fully ripe and have a slightly soft feel. Harvest them as soon as they ripen to avoid them being eaten by birds or other wildlife.



                                </p>
                            </div>
                            <Chart
                                mNum={4}
                                ttfgNum={8}
                                dcNum={6}
                                seNum={8}
                                rtgNum={6}
                                name="Figs"
                            />
                        </div>
                        <div>
                        <ResultsButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}