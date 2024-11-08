import Image from "next/image";
import Router from "next/router";
import styles from "@/components/Veggies/Kale/Kale.module.css";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function Kale() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Kale</h1>
              <Image
                src={"/fruitsAndVeggiesImages/kale.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Kale</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Kale leaves can be harvested when they are young
                    and tender, or when they are mature and more
                    substantial.Kale is a cool-season crop that grows best in
                    temperatures between 60°F and 65°F (15°C to 18°C). It can be
                    grown in both spring and fall.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Store in the refrigerator. Don't wash until ready
                    to use and Use within a few days.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Kale is a cool-season crop that
                    requires consistent moisture and partial sunlight to grow
                    well.
                  </p>
                </div>
                <Chart 
                mNum={5} 
                ttfgNum={6} 
                dcNum={3} 
                seNum={7} 
                rtgNum={5} 
                name="Kale"
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
