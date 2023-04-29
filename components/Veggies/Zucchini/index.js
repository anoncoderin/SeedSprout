import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";

export default function Zucchini({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Zucchini</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Zucchini.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Zucchini</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Zucchini should be harvested when they are young
                    and tender, usually when they are 6-8 inches long and 1-2
                    inches in diameter.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: To keep them fresh, wrap them in a paper towel and
                    place them in a plastic bag or airtight container in the
                    refrigerator.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Zucchini requires full sun to
                    grow, at least 6-8 hours of direct sunlight per day. Water
                    it deeply once a week or more often if the weather is hot
                    and dry. Make sure the soil is well-draining and doesn't get
                    waterlogged.
                  </p>
                </div>
                <Chart 
                mNum={5} 
                ttfgNum={6} 
                dcNum={5} 
                seNum={8} 
                rtgNum={7} 
                name="Zucchini"
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
