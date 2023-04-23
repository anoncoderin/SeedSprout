import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/ResultsInfo/resultsInfo.module.css";

export default function Potato({}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
            <div>
              <h1 className={styles.header}>Potato</h1>
              <Image
                src={"/fruitsAndVeggiesImages/Potato.svg"}
                width={360}
                height={216}
              />
              <div className={styles.tips}>
                <h1 className={styles.header_tips}>Tips on growing Potatoes</h1>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>1.</h2>{" "}
                  <p>
                    Harvesting: Potatoes can be harvested when the plants begin
                    to die back and turn yellow or brown. Carefully dig up the
                    potatoes with a garden fork. Allow the potatoes to dry in
                    the sun for a few hours before storing them.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>2.</h2>{" "}
                  <p>
                    Storage: Potatoes should be stored in a cool, dark, and
                    well-ventilated place, such as a root cellar, basement, or
                    pantry.
                  </p>
                </div>

                <div className={styles.numbered_tips}>
                  <h2 className={styles.numbered}>3.</h2>{" "}
                  <p>
                    Sun and water requirements: Potatoes require full sun to
                    grow and produce a good yield, at least 6-8 hours of direct
                    sunlight per day. Potatoes require consistent moisture, but
                    it's important not to over-water them. Water them deeply
                    once a week or more often if the weather is hot and dry.
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
