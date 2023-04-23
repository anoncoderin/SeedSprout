import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/resultsInfo.module.css";

export default function Carrot({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Carrot</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Carrots.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Carrots</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Carrots can be harvested once the tops of the
                    roots reach a diameter of about 1/2 inch to 1 inch (1.3 to
                    2.5 cm) and the length is long enough for the intended use.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Carrots can be stored in a cool, dry place for
                    several weeks to several months, depending on the variety
                    and conditions.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Carrots require full sun
                    exposure in order to grow properly. This means they need at
                    least 6 hours of direct sunlight per day.
                  </p>
                </div>
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
