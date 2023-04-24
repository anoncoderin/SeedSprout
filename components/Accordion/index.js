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

  const organizedData = fruitsAndVeggiesCatalogue.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <>
      {/* Div that contains the entire accordion */}
      <div className={styles.accordion}>
        <h3 className={styles.itemTypeHeader} style={{ color: 'rgb(var(--fruitBlue))' }}>Fruits</h3>
        {
          /* Maps through fruitsAndVeggiesCatalogue data to make an accordion for each item */
          organizedData && organizedData.map((item, index) => (
            //Filters through data and grabs items with type === "Vegetable"
            item.type === 'fruit' &&
            <div className={styles.accordionSection} key={index}>
              {/**Runs function to open and close item*/}
              <div className={styles.accordionHeader} onClick={() => handleAccordionClick(index)}>
                {item.title}
                <div className={styles.arrowContainer}>
                  {index === activeIndex ? <Image src='/icons/UpArrow.svg' width={22} height={22} /> : <Image src='/icons/DownArrow.svg' width={22} height={22} />}
                </div>
              </div>
              {/**Section appears when you click on item*/}
              {
                index === activeIndex && (
                  <div className={styles.accordionContent}>
                    <h1 className={styles.sectionHeader}>Tips on growing {item.title}</h1>
                    <div ><Image src={item.img} width={292} height={136}/></div>
                    <p className={styles.itemContentP}>
                      {item.content}
                    </p>
                  </div>
                )
              }
            </div>

          ))
        }
        <h3 className={styles.itemTypeHeader}>Vegetables</h3>
        {
          organizedData && organizedData.map((item, index) => (
            //Filters through data and grabs items with type === "Vegetable"
            item.type === 'Vegetable' &&
            <div className={styles.accordionSection} key={index}>
              {/**Runs function to open and close item*/}
              <div className={styles.accordionHeader} onClick={() => handleAccordionClick(index)}>

                {item.title}
                <div className={styles.arrowContainer}>
                  {index === activeIndex ? <Image src='/icons/UpArrow.svg' width={22} height={22} /> : <Image src='/icons/DownArrow.svg' width={22} height={22} />}
                </div>
              </div>
              {/**Section appears when you click on item*/}
              {
                index === activeIndex && (
                  <div className={styles.accordionContent}>
                    {/* Need to add information and content and use classNames to distinguish colorus, etc.. */}
                    <h1 className={styles.sectionHeader}>Tips on growing {item.title}</h1>
                    <div ><Image src={item.img} width={292} height={136}/></div>
                    <p className={styles.itemContentP}>
                      {item.content}
                    </p>
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

