import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Lime() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Lime</h1>
                        <Image src={"/fruitsAndVeggiesImages/lime.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Lime</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Limes need a warm and sunny location to grow well. They prefer well-draining soil with a pH of 6.0 to 7.5. Choose a spot that gets at least 6 hours of direct sunlight per day.


                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Water the tree deeply once a week during the growing season. Allow the soil to dry out slightly before watering again. Do not overwater as it can cause root rot.





                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Limes are ready to harvest when they are fully green or yellow, depending on the variety. They should be picked by hand when they are fully ripe.





                                </p>
                            </div>
                            <Chart
                                mNum={6}
                                ttfgNum={3}
                                dcNum={4}
                                seNum={9}
                                rtgNum={7}
                                name="Lime"
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