import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function Cabbage({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Cabbage</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Cabbage.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Cabbage</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Cabbage is ready to harvest when the heads are
                    firm and solid. Cut the head from the stem with a sharp
                    knife, leaving the outer leaves intact.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Fresh cabbage should be used or refrigerated as
                    soon as possible after harvesting, as it can quickly lose
                    its freshness and become wilted.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Cabbage requires full sun, which
                    means at least 6-8 hours of direct sunlight per day. Cabbage
                    needs consistent moisture to grow properly. Water deeply
                    once or twice a week, making sure the soil is moist to a
                    depth of at least 6 inches.
                  </p>
                </div>
                <Chart 
                mNum={7} 
                ttfgNum={8} 
                dcNum={6} 
                seNum={6} 
                rtgNum={6} 
                name="Cabbage"
              />
              </div>
              <div>
                {" "}
                <button onClick={() => router.back()}>Back</button>{" "}
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}
