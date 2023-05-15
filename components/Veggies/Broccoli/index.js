import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Broccoli({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Broccoli</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Broccoli.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Broccoli</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Broccoli is ready to harvest when the head is
                    fully formed and still tight. Cut the head from the stem
                    with a sharp knife, leaving about 6 inches of stem attached
                    to the plant.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Fresh broccoli should be used or refrigerated as
                    soon as possible after harvesting, as it can quickly lose
                    its freshness and become wilted.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Broccoli requires full sun,
                    which means at least 6-8 hours of direct sunlight per day.
                    Broccoli needs consistent moisture to grow properly. Water
                    deeply once or twice a week, making sure the soil is moist
                    to a depth of at least 6 inches.
                  </p>
                </div>
                <Chart 
                mNum={6} 
                ttfgNum={7} 
                dcNum={6} 
                seNum={7} 
                rtgNum={6} 
                name="Broccoli"
              />
              </div>
              <div>
              <ResultsButton />
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}
