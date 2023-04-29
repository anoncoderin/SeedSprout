import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function Squash({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Squash</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Squash.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Squash</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Summer squash is ready to harvest when the it is
                    still young and tender, typically when it is 6-8 inches
                    long.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Summer squash should be used or refrigerated as
                    soon as possible after harvesting, as it can quickly lose
                    its freshness and become rubbery.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Squash requires full sun, which
                    means at least 6-8 hours of direct sunlight per day. Squash
                    requires full sun, which means at least 6-8 hours of direct
                    sunlight per day.
                  </p>
                </div>
                <Chart
                  mNum={6}
                  ttfgNum={7}
                  dcNum={6}
                  seNum={8}
                  rtgNum={7}
                  name="Squash"
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
