import Image from "next/image"
import styles from './QuizContents.module.css'

export default function QuizContents({
    option
}) {
    console.log(option)
    return(
        <>
            
            {/* {
                optionOne && optionOne.map((info, index) => {
                    return(
                        <div key={index}>
                            <div>{info}</div>
                            <Image className={styles.graphicImage} src={img} width={width} height={height} />
                            <p>{text}</p>
                            <p className={styles.smallText}>{smalltext}</p>
                        </div>
                    )
                })
            } */}
            <div className={styles.container} >
                <Image className={styles.graphicImage} src={option[1]} width={option[2]} height={option[3]} />
                <span>{option[0]}</span>
            </div>
                        {/* <span onClick={() => nextPage('0')}>
                            <QuizOptions text='Fruits' img='/graphics/fruitBundle.svg' width='90' height='150' />
                        </span> */}
        </>
    )
}