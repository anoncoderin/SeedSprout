import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function SweetPotato({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Sweet Potato</h1>
              <Image
                src={"/fruitsAndVeggiesImages/SweetPotato.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>
                  Tips on growing Sweet Potato
                </h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Sweet potatoes are ready to harvest when the
                    leaves start to yellow and die back, usually around 100-120
                    days after planting.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Cured sweet potatoes should be stored in a cool,
                    dry place with good ventilation, such as a root cellar or
                    pantry.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Sweet potatoes prefer full sun,
                    which means at least 6-8 hours of direct sunlight per day.
                    Sweet potatoes need consistent moisture to grow properly,
                    but overwatering can cause the roots to rot.
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
