import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";

export default function Lettuce({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Lettuce</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Lettuce.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Lettuce</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Lettuce is ready to harvest when the leaves are
                    large enough to use and before they begin to bolt (produce
                    flowers and seeds).
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Fresh lettuce should be used or refrigerated as
                    soon as possible after harvesting, as it can quickly lose
                    its freshness and become wilted.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Lettuce prefers partial shade,
                    which means 4-6 hours of direct sunlight per day. Lettuce
                    needs consistent moisture to grow properly. Water deeply
                    once or twice a week, making sure the soil is moist to a
                    depth of at least 6 inches.
                  </p>
                </div>
                <Chart 
                mNum={4} 
                ttfgNum={3} 
                dcNum={3} 
                seNum={5} 
                rtgNum={6} 
                name="Lettuce"
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
