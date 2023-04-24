import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";

export default function Beet({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Beet</h1>
              <Image
                src={"/fruitsAndVeggiesImages/BeetRoot.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Beet</h1>

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
