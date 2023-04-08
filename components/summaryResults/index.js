
import Image from "next/image"
import styles from '.SummaryResults.module.css'

export default function SummaryResults({
    
    img = '',
    text = '',
    color = '',
    
}) {
    
    return (
        <>
            
            <div className={styles.mainContainer} style={{ border: '2px solid black', borderColor: `rgba(${color}, 0.5)`, borderRadius: '5px' }}> 
                        <div className={styles.image}>
                            <img src = {img} width={90} height={98}/>
                        </div>
                        <div className={styles.text}>
                            <p>{text}</p>
                        </div>
                </div>
          

            
        </>
    )
}
