import { useState } from "react";
import styles from "@/components/ResultsNew/ResultsNew.module.css";
import { fruitsAndVeggiesCatalogue } from "@/data/fruitsAndVeggiesCatalogue";
import ResultsItems from "../ResultsItems";
import resultsInfo from "../resultsInfo";

export default function ResultsNew(userinput) {
  const match = userinput.userinput;
  console.log("userinput", userinput);

  const [data, setData] = useState(userinput.userinput[0]);
  const [color, setColor] = useState();

  if (data == '0') {
    setData('fruits')
    setColor('var(--fruitBlue)')
  } else if (data == '1') {
    setData('vegetables')
    setColor('var(--vegeOrange)')
  }

  console.log(color)
  return (
    <>
      <div className={styles.whole_result_container}>
        <h2 style={{ color: `rgb(${color})`, margin: 0, marginTop: '1rem' }}>Results</h2>

        <span className={styles.p_text}>
          These {data} are the most suitablefor you to grow based on your
          results.
        </span>

        {fruitsAndVeggiesCatalogue &&
          fruitsAndVeggiesCatalogue.map((item, i) =>
            // console.log("index",item.index, match, item.index.includes(match)) &&
            (Array.isArray(item.index)
              ? item.index.includes(match)
              : item.index === match) && (
              <div>
                <div className={styles.image_selections_bottom} index={i}>
                  <div className={styles.list_image}>
                    <ResultsItems img={item.img} color={item.color} text={item.title} width={292} height={136} />
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}
