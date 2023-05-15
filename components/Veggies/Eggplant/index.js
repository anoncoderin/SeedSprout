import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"


export default function Eggplant({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Eggplant</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Eggplant.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Eggplant</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Eggplants are ready to harvest when the fruit is
                    shiny and firm, and the skin is deep purple (or the color of
                    the specific variety).
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Fresh eggplants should be used or refrigerated as
                    soon as possible after harvesting, as they can quickly lose
                    their freshness and become bitter. Store fresh eggplants in
                    a plastic bag or container in the refrigerator for up to 5-7
                    days.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Eggplants require full sun,
                    which means at least 6-8 hours of direct sunlight per day.
                    Water deeply once a week, making sure the soil is moist to a
                    depth of at least 6 inches.
                  </p>
                </div>
                <Chart
                  mNum={6}
                  ttfgNum={7}
                  dcNum={6}
                  seNum={8}
                  rtgNum={6}
                  name="Eggplant"
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
