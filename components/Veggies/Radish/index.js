import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function Radish({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Radish</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Radishes.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Radishes</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Radishes are ready to harvest when the roots are
                    firm and the tops are green and healthy-looking.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Fresh radishes should be used or refrigerated as
                    soon as possible after harvesting, as they can quickly lose
                    their freshness and become rubbery.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Radishes require full sun to
                    partial shade, which means at least 4-6 hours of direct
                    sunlight per day. Radishes need consistent moisture to grow
                    properly. Water deeply once a week, making sure the soil is
                    moist to a depth of at least 6 inches.
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
