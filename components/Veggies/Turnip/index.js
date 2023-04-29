import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function Turnip({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Turnip</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Turnip.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Turnip</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Turnips are ready to harvest when the roots are
                    between 2-3 inches in diameter, usually around 50-60 days
                    after sowing.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Fresh turnips should be used or refrigerated as
                    soon as possible after harvesting, as they can quickly lose
                    their freshness and become wilted. Store fresh turnips in a
                    plastic bag or container in the refrigerator for up to 1-2
                    weeks.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Turnips prefer full sun, which
                    means at least 6-8 hours of direct sunlight per day. Turnips
                    need consistent moisture to grow properly. Water deeply once
                    or twice a week, making sure the soil is moist to a depth of
                    at least 6 inches.
                  </p>
                </div>
                <Chart 
                mNum={6} 
                ttfgNum={7} 
                dcNum={6} 
                seNum={8} 
                rtgNum={7} 
                name="Apples"
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
