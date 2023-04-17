import Image from "next/image"
import styles from '@/components/resultsInfo/resultsInfo.module.css'
import Button from "../Button"
import { produceInfo } from '@/data/produceInfo'


export default function resultsInfo(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {produceInfo.map((produce) => {
            return (
              <div key={produce.title}>
                <h1 className={styles.header}>{produce.title}</h1>
                <Image src={produce.img} width={360} height={216} />
                <p>{produce.description}</p>
                <div className={styles.tips}>
          <h1 className={styles.header_tips}>tips on growing {produce.itemTitle}</h1>

          <div className={styles.numbered_tips}>
            <h2 className={styles.numbered}>1.</h2> <p>{produce.tipOne}</p>
          </div>

          <div className={styles.numbered_tips}>
            <h2 className={styles.numbered}>2.</h2> <p>{produce.tipTwo}</p>
          </div>

          <div className={styles.numbered_tips}>
            <h2 className={styles.numbered}>3.</h2> <p>{produce.tipThree}</p>
          </div>
        </div>
              </div>
              
            )
          })}
        </div>

        <div className={styles.backButton}>
          <Button size={["12.063rem", "3.813rem"]} text='Back' />
        </div>
      </div>
    </>
  )
}

