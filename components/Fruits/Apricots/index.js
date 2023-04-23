import Image from "next/image";
import styles from "@/components/resultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Appicots() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          <div>
            <h1 className={styles.header}>Apicots</h1>
            <Image src={"/fruitsAndVeggiesImages/apricots.svg"} width={360} height={216} />
            <div className={styles.tips}>
              <h1 className={styles.header_tips}>Tips on growing Apricots</h1>
              <div className={styles.numbered_tips}>
                <h2 className={styles.numbered}>1.</h2>
                <p>
                Apricot trees require full sunlight to thrive, so choose a sunny spot in your garden for planting. Make sure the area has well-drained soil and is protected from frost pockets, as apricot flowers are sensitive to late frost.
                </p>
              </div>
              <div className={styles.numbered_tips}>
                <h2 className={styles.numbered}>2.</h2>
                <p>
                Dig a hole that is wide and deep enough to accommodate the tree's root system. Loosen the soil at the bottom of the hole and mix in some organic matter, such as compost or well-rotted manure, to provide essential nutrients for the tree's growth.

                </p>
              </div>
              <div className={styles.numbered_tips}>
                <h2 className={styles.numbered}>3.</h2>
                <p>
                Prune your apricot tree annually to promote healthy growth and fruit production. Remove any dead, diseased, or crossing branches, and maintain an open canopy to allow sunlight to penetrate into the tree's interior.

                </p>
              </div>
              <Chart 
                mNum={6} 
                ttfgNum={8} 
                dcNum={8} 
                seNum={7} 
                rtgNum={8} 
                name="Apricots"
              />
            </div>
            <div>
              {" "}
              <button onClick={() => router.back()}>Back</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}