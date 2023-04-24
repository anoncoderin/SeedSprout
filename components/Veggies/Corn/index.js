import Image from "next/image";
import Router from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import { useRouter } from "next/router";

export default function Corn({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Corn</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Corn.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Corn</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Harvest time for corn usually falls in mid to
                    late summer, depending on the planting time and variety.
                    Corn is best harvested early in the morning or late in the
                    evening when the temperatures are cooler. 
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                  Storage: Corn
                    should be stored with its husks on to help retain its
                    moisture and freshness. The Keep it cool. 
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                  Sun and water
                    requirements: Corn is a warm-season crop that requires
                    consistent moisture and full sunlight to grow well. It's
                    important to water the corn deeply and regularly, especially
                    during hot and dry weather.
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
