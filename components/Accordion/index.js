import { useState } from 'react'
import Image from 'next/image'
import styles from '@/components/Accordion/Accordion.module.css'
import { fruitsAndVeggiesCatalogue } from '@/data/fruitsAndVeggiesCatalogue'

export default function Accordion() {

  const [activeIndex, setActiveIndex] = useState(false);

  //Handles if accordion is open or closed
  const handleAccordionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(false);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {/* Div that contains the entire accordion */}
      <div className={styles.accordion}>
      <div>Fruits</div>
        {
          /* Maps through fruitsAndVeggiesCatalogue data to make an accordion for each item */
          fruitsAndVeggiesCatalogue && fruitsAndVeggiesCatalogue.map((item, index) => (
            //Filters through data and grabs items with type === "Vegetable"
            item.type === 'fruit' &&
            <div className={styles.accordionSection} key={index}>
              {/**Runs function to open and close item*/}
              <div className={styles.accordionHeader} onClick={() => handleAccordionClick(index)}>
                {item.title}
                <div>
                  {index === activeIndex ? "↑" : "↓"}
                </div>
              </div>
              {/**Section appears when you click on item*/}
              {
                index === activeIndex && (
                  <div className={styles.accordionContent}>
                    {/* Need to add information and content and use classNames to distinguish colorus, etc.. */}
                    <h1 style={{ color: 'var(--vegeOrange)' }}>Tips on growing {item.title}</h1>
                    {item.content}
                  </div>
                )
              }
            </div>

          ))
        }
        <div>Vegetables</div>
        {
          fruitsAndVeggiesCatalogue && fruitsAndVeggiesCatalogue.map((item, index) => (
            //Filters through data and grabs items with type === "Vegetable"
            item.type === 'Vegetable' &&
            <div className={styles.accordionSection} key={index}>
              {/**Runs function to open and close item*/}
              <div className={styles.accordionHeader} onClick={() => handleAccordionClick(index)}>
                
                {item.title}
                <div>
                  {index === activeIndex ? <Image src='/icons/UpArrow.svg' width={10} height={10}/> : "↓"}
                </div>
              </div>
              {/**Section appears when you click on item*/}
              {
                index === activeIndex && (
                  <div className={styles.accordionContent}>
                    {/* Need to add information and content and use classNames to distinguish colorus, etc.. */}
                    <h1 style={{ color: 'var(--vegeOrange)' }}>Tips on growing {item.title}</h1>
                    {item.content}
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
    </>
  )
}

