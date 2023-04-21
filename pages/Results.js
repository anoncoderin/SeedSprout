import ResultsNew from "@/components/ResultsNew";
import SummaryItems from "@/components/SummeryItems";
import styles from '@/styles/Results.module.css'
import { useRouter } from 'next/router'

export default function Results(){
      const router = useRouter()
      const choices = JSON.parse(router.query.choices)
      const data = JSON.parse(router.query.data)
    return(
        <>
        <div className={styles.top_summary_container}>
              <h2 className={styles.h_text}>Summary</h2>
              <div className={styles.img_set_four}>
               <SummaryItems arr={choices}/>
              </div>
              <div>
                <ResultsNew userinput={data} />
              </div>
            </div>
        </>
    )
}