import Image from "next/image";
import Router from "next/router";
import styles from "@/components/Veggies/Kale/Kale.module.css";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";

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
                    Harvesting: 
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: 
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: 
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
