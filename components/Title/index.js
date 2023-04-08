import styles from './Title.module.css'

export default function Title({
    title
}) {
    return(
        <>
            <h1 className={styles.h1}>{title}</h1>
        </>
    )
}