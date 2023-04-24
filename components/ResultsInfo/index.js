import Image from "next/image"
import styles from '@/components/ResultsInfo/ResultsInfo.module.css'
import Button from "../Button"
import { produceInfo } from '@/data/produceInfo'


export default function ResultsInfo({
    img = '',
    title = '',
    color = '',
    description = '',
    tipOne = '',
    tipTwo = '',
    tipThree = ''
}) {
  return (
    <>
  
      <div className={styles.container}>
        <div className={styles.produce_description}>
          {
                <div>
                  <h1 className={styles.header}>{title}</h1>
                  <Image src={img} width={360} height={216} />
                  <p>{description}</p>
                  <div className={styles.tips}>
                    <h1 className={styles.header_tips}>Tips on growing {title}</h1>

                    <div className={styles.numbered_tips}>
                      <h2 className={styles.numbered}>1.</h2> <p>{tipOne}</p>
                    </div>

                    <div className={styles.numbered_tips}>
                      <h2 className={styles.numbered}>2.</h2> <p>{tipTwo}</p>
                    </div>

                    <div className={styles.numbered_tips}>
                      <h2 className={styles.numbered}>3.</h2> <p>{tipThree}</p>
                    </div>
                    <Button
                  size={["9.188rem", "2.905rem"]}
                  link=""
                  text="Back"
                  
                />
                  </div>
                </div>

              
           
          }
        </div>
      </div>
     
    </>
  )
}

