import Image from "next/image";
import Router from "next/router";
import styles from "@/components/Veggies/Kale/Kale.module.css";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Garlic() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Garlic</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Garlic.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Garlic</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Garlic is typically ready to harvest when the leaves start to turn yellow and dry out. This usually occurs in mid to late summer, depending on the variety and your growing conditions. Avoid waiting too long, as the bulbs may start to separate and lose quality.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Garlic should be stored in a cool, dark, and dry environment. Ideally, the temperature should be around 60 to 65°F (15 to 18°C). Avoid storing garlic in areas with high humidity or direct sunlight, as this can cause sprouting or spoilage.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Garlic plants thrive in full sun, which means they need at least 6 to 8 hours of direct sunlight each day. Choose a location in your garden that receives ample sunlight. Water your garlic plants deeply once or twice a week, providing enough water to saturate the root zone.
                  </p>
                </div>
                <Chart 
                mNum={6} 
                ttfgNum={4} 
                dcNum={5} 
                seNum={7} 
                rtgNum={8} 
                name="Garlic"
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
