import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function Cilantro({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Cilantro</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Cilantro.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>
                  Tips on growing Cilantro
                </h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: The leaves can be harvested when the plant is
                    6-8 inches tall, which usually takes about 3-4 weeks after
                    planting. Once the plant has developed 4-6 leaves, you can
                    start harvesting the outer leaves by cutting them off at the
                    base of the stem
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Wash the coriander leaves and dry them thoroughly
                    using a paper towel or a salad spinner.Wrap the leaves in a
                    dry paper towel or place them in a clean, dry plastic
                    bag.Store the wrapped leaves in the refrigerator in a sealed
                    container use themes within a week for the best flavor.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Too much direct sunlight can
                    cause the leaves to wilt or dry out quickly. Coriander
                    requires consistent moisture, but it's important not to
                    over-water it. The soil should be kept moist but not
                    waterlogged.
                  </p>
                </div>
                <Chart 
                mNum={6} 
                ttfgNum={4} 
                dcNum={5} 
                seNum={6} 
                rtgNum={4} 
                name="Cilantro"
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
