import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";

export default function Cauliflower({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Cauliflower</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Cauliflower.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>
                  Tips on growing Cauliflower
                </h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Cut the head of the cauliflower off with a sharp
                    knife, leaving a few leaves attached to the stem. If you see
                    any yellowing or discoloration on the head, harvest it
                    immediately as it may be a sign of disease.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Cauliflower should be stored in the refrigerator
                    for up to a week. To keep it fresh, wrap it in a paper towel
                    and place it in a plastic bag or airtight container. Avoid
                    washing the cauliflower until you're ready to use it
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Cauliflower requires full sun to
                    grow and produce a good yield, at least 6-8 hours of direct
                    sunlight per day. Cauliflower requires consistent moisture,
                    but it's important not to over-water it.
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
