import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/resultsInfo.module.css";

export default function Peas({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Peas</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Pea.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Peas</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Peas are ready to harvest when the pods are
                    plump and the peas inside are tender and sweet. Harvest the
                    pods when they are still young, before the peas inside begin
                    to bulge and harden.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Store fresh peas in a plastic bag or container in
                    the refrigerator for up to 3-5 days. Alternatively, you can
                    blanch and freeze peas for longer-term storage.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Peas require full sun, which
                    means at least 6-8 hours of direct sunlight per day. Water
                    deeply once a week, making sure the soil is moist to a depth
                    of at least 6 inches.
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
