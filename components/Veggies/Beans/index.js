import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Beans({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          
            <div>
              <h1 className={styles.header}>Beans</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Beans.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Beans</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Harvest the pods when they are still young,
                    before the beans inside begin to bulge and harden.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Store fresh beans in a plastic bag or container in
                    the refrigerator for up to 3-5 days. Alternatively, you can
                    blanch and freeze beans for longer-term storage.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Beans require full sun, which
                    means at least 6-8 hours of direct sunlight per day. Water
                    deeply once a week, making sure the soil is moist to a depth
                    of at least 6 inches.
                  </p>
                </div>
                <Chart 
                mNum={4} 
                ttfgNum={6} 
                dcNum={4} 
                seNum={8} 
                rtgNum={6} 
                name="Beans"
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
