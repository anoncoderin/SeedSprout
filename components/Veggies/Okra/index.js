import Image from "next/image";
import Router from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";

export default function Okra({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Okra</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Okra.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Okra</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Okra is a wonderful plant to grow in the summer
                    garden. Not only is the okra plant self-sufficient, it
                    adapts to especially dry and hot conditions like a champ,
                    and is even widely considered heat and drought-tolerant in
                    most climates.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Okra should be stored in the refrigerator to keep
                    it fresh. Place it in a plastic bag or wrap it in a damp
                    towel before storing it in the vegetable compartment of the
                    refrigerator. Do not wash the okra until you are ready to
                    use it. Avoid freezing: Okra does not freeze well.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Okra is a warm-season vegetable
                    that requires plenty of sun and water to grow well.
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
