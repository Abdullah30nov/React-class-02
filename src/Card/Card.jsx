import styles from "./Card.module.css";

const Card = ({tittle,description,src})=>{
    return(
        <>
        <div className={styles.card}>
            <img src={src} alt=""  className={styles.img}/>
            <h2>{tittle}</h2>
            <p>{description}</p>
        </div>
        </>
    )
}

export default Card