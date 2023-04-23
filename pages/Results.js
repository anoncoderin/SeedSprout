import ResultsNew from "@/components/ResultsNew";
import SummaryItems from "@/components/SummeryItems";
import styles from '@/styles/Results.module.css'
import { useRouter } from 'next/router'
import Button from "@/components/Button";
import { useState } from 'react'
import NavBarBottom from "@/components/NavBarBottom";
import NavBar from "@/components/NavBar";

export default function Results() {
  const router = useRouter()
  
  const choices = router.query.choices ? JSON.parse(router.query.choices) : [];
  const data = router.query.data ? JSON.parse(router.query.data) : [];

  const [indexData, setIndexData] = useState(data[0]);
  const [color, setColor] = useState();

  if (indexData == '0') {
    setColor('var(--fruitBlue)')
    setIndexData(5)
  } else if (indexData == '1') {
    setColor('var(--vegeOrange)')
    setIndexData(5)
  }
  return (
    <>
    <NavBar/>
    <NavBarBottom/>
      <div className={styles.container}>
        <div className={styles.summaryContainer}>
          <h2 style={{ color: `rgb(${color})` }} >Summary</h2>
          <div className={styles.img_set_four}>
            <SummaryItems arr={choices} color={color} />
          </div>
        </div>

        <div className={styles.resultContainer}>
          <ResultsNew userinput={data} />
        </div>
        <div className={styles.button}>
          <Button
            size={["9.188rem", "2.905rem"]}
            link="/QuizPage"
            text="Restart Quiz"
          />
        </div>
      </div>
    </>
  )
}
