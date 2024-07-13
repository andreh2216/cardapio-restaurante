import styles from "./CampoDeBusca.module.css"



export default function CampoDeBusca(props){

        return(<div>
                
          <input 
          value={props.texto}
          onChange={(event)=>props.handle(event.target.value)}
          placeholder="Pesquise aqui um dos pratos do nosso cardápio" 
          className={styles.input}
          />
            
        </div>)


}