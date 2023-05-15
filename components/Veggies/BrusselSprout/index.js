import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function BrusselSprout({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Brussel Sprout</h1>
              <Image
                src={"/fruitsAndVeggiesImages/BrusselSprout.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>
                  Tips on growing Brussel Sprout
                </h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: To harvest, snap or cut off the sprouts from the
                    stem, starting at the bottom and working upward. If you
                    don't harvest the sprouts in time, they will become tough
                    and bitter.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Fresh Brussels sprouts can be stored in the
                    refrigerator for up to a week. Store them in a plastic bag
                    or container with a damp paper towel to keep them moist.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Brussels sprouts require full
                    sun, which means at least 6-8 hours of direct sunlight per
                    day. Water deeply once a week, making sure the soil is moist
                    to a depth of at least 6 inches.
                  </p>
                </div>
                <Chart 
                mNum={7} 
                ttfgNum={8} 
                dcNum={7} 
                seNum={7} 
                rtgNum={6} 
                name="Brussel Sprouts"
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
