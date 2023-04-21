import Image from "next/image"
import styles from '@/components/resultsInfo/ResultsInfo.module.css'
import Button from "@/components/Button"
import { useRouter } from "next/router"

export default function Blueberries({
    


}) {
    const router = useRouter();

  return (
    <>
  
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
           
           
                <div>
                  <h1 className={styles.header}>Blueberries</h1>
                  <Image src={"/fruitsAndVeggiesImages/blueberries.svg"} width={360} height={216} />
                  <div className={styles.tips}>
                    <h1 className={styles.header_tips}>Tips on growing blueberries</h1>

                    <div className={styles.numbered_tips}>
                      <h2 className={styles.numbered}>1.</h2> <p>Blueberries prefer well-drained soil that is high in organic matter. They also need a location that gets full sun for at least six hours a day.</p>
                    </div>

                    <div className={styles.numbered_tips}>
                      <h2 className={styles.numbered}>2.</h2> <p></p>
                    </div>

                    <div className={styles.numbered_tips}>
                      <h2 className={styles.numbered}>3.</h2> <p></p>
                    </div>
                    
                  </div>
                  <div>  <button onClick={() => router.back()}>Back</button> </div>
                </div>

                


              
           
          }
        
        </div>
      </div>
    </>
  )
}
