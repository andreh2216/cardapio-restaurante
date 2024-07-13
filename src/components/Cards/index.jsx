import styles from "./Cards.module.css"

import Image  from "next/image"






export default function Card(prop){
    return(<div className={styles.card}>

        <div className={styles.imagem}>
            <Image className={styles.img} src={prop.imagem}/>

            </div>

            <div className={styles.texto}>
            <h2>{prop.nome}</h2>
            <p className={styles.cat}>{prop.categoria}</p>
            <p>{prop.descricao}</p>
            <p className={styles.preco}>R$ {prop.preco.toFixed(2)}</p>


            </div>
           
         


    </div>)
}