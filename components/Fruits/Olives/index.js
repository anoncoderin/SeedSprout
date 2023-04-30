import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Olives() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produce_description}>
                    <div>
                        <h1 className={styles.header}>Olives</h1>
                        <Image src={"/fruitsAndVeggiesImages/olives.svg"} width={360} height={216} />
                        <div className={styles.tips}>
                            <h1 className={styles.header_tips}>Tips on growing Olives</h1>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>1.</h2>
                                <p>
                                Olives are drought-tolerant, but they still need regular watering, especially during the first few years after planting. Avoid overwatering, as this can lead to root rot.

                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>2.</h2>
                                <p>
                                Olives prefer well-draining soil with a pH between 6.0 and 8.0. They do best in soil that is rich in organic matter.






                                </p>
                            </div>
                            <div className={styles.numbered_tips}>
                                <h2 className={styles.numbered}>3.</h2>
                                <p>
                                Olives are susceptible to a few diseases, such as verticillium wilt and olive knot. To prevent disease, avoid over-fertilizing, practice good sanitation, and promptly remove any infected plant material.






                                </p>
                            </div>
                            <Chart
                                mNum={5}
                                ttfgNum={9}
                                dcNum={7}
                                seNum={6}
                                rtgNum={8}
                                name="Olives"
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