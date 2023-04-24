import Image from "next/image";
import styles from "@/components/ResultsInfo/ResultsInfo.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Chart from "@/components/Chart";


export default function Apples() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          <div>
            <h1 className={styles.header}>Apples</h1>
            <Image src={"/fruitsAndVeggiesImages/apples.svg"} width={360} height={216} />
            <div className={styles.tips}>
              <h1 className={styles.header_tips}>Tips on growing apples</h1>
              <div className={styles.numbered_tips}>
                <h2 className={styles.numbered}>1.</h2>
                <p>
                Apples need full sun to grow well, so choose a location that gets at least six hours of direct sunlight per day. Make sure the soil is well-drained and has good fertility.
                </p>
              </div>
              <div className={styles.numbered_tips}>
                <h2 className={styles.numbered}>2.</h2>
                <p>
                Apples can be prone to pests and diseases, so be sure to monitor your trees regularly for any signs of damage. Consider using organic or natural pest and disease control methods to reduce chemical use.

                </p>
              </div>
              <div className={styles.numbered_tips}>
                <h2 className={styles.numbered}>3.</h2>
                <p>
                Apples are ready to harvest when they are fully colored and easily twist off the branch. Store your apples in a cool, dry place to extend their shelf life.

                </p>
              </div>
              <Chart 
                mNum={6} 
                ttfgNum={7} 
                dcNum={6} 
                seNum={8} 
                rtgNum={7} 
                name="Apples"
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