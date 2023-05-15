import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Chart from "@/components/Chart";
import ResultsButton from "@/components/ResultsButton"

export default function BellPepper({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Bell Pepper</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Peppers.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>
                  Tips on growing Bell Pepper
                </h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Peppers can be harvested when they reach their
                    desired size, which is usually around 3-4 inches in length
                    for green peppers and 4-6 inches for mature peppers.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Bell peppers can be stored in the refrigerator for
                    up to a week. To keep them fresh, wrap them in a paper towel
                    and place them in a plastic bag or airtight container.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: If you're growing them in
                    containers, make sure to place them in a location that gets
                    full sun, such as a sunny balcony or patio. Make sure the
                    soil is well-draining and doesn't get waterlogged.
                  </p>
                </div>
                <Chart 
                mNum={6} 
                ttfgNum={4} 
                dcNum={5} 
                seNum={6} 
                rtgNum={4} 
                name="Bell Pepper"
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
