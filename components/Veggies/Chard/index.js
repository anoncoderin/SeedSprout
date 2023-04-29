import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function Chard({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Chard</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Chard.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Chard</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Chard leaves can be harvested when they are 6-8
                    inches long. Cut the outer leaves first, leaving the
                    smaller, inner leaves to continue growing.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: To store chard leaves, wrap them in a damp paper
                    towel and place them in a plastic bag in the refrigerator.
                    They should last for 3-4 days.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Chard grows best in full sun,
                    which is defined as at least six hours of direct sunlight
                    per day. The soil should be kept evenly moist, but not
                    waterlogged. It is important to water the plant deeply, so
                    that the roots can absorb the water.
                  </p>
                </div>
                <Chart
                  mNum={5}
                  ttfgNum={6}
                  dcNum={5}
                  seNum={7}
                  rtgNum={6}
                  name="Chard"
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
