'use client';
import {useState} from "react";

import Image from "next/image";

import entradas from "../../../public/assets/entrada.png";
import massas from "../../../public/assets/massa.png";
import carnes from "../../../public/assets/carne.png";
import bebidas from "../../../public/assets/bebidas.png";
import saladas from "../../../public/assets/salada.png";
import sobremesas from "../../../public/assets/sobremesa.png";


import  {filtro, start, buscarProduto} from "../../service";

import CampoDeBusca from "../CampoDeBusca";
import Card from "../Cards";


import styles from "./Categorias.module.css"


export default function Categorias(){

  



    const [produto, setProdutos] = useState(start())
    const [cor, setCor] = useState("Entradas");
    const [texto, setTexto] = useState("")

    const handleBusca = (textoDigitado) => {
        setTexto(textoDigitado);
        textoDigitado.length >= 3 && setProdutos(buscarProduto(textoDigitado));
        setCor("");
      };
    
      const handleFiltro = (categoria) => {
        setTexto("");
        setDadosFiltrados(filtrarProdutos(categoria));
        setCor(categoria);
      };
    
    
    
     function busca(categoria){
        filtro(categoria)
        setProdutos(filtro(categoria))
        setCor(categoria)
        setTexto("")
    }
    
   
    return(
        <div>
        <div className={styles.container_btn} >   

        <button className={cor === "Entradas" ? styles.fundo : styles.btn}  onClick={()=>busca("Entradas")}> <Image className={styles.btn_img} src={entradas}/>  Entradas</button>
        <button  className={cor === "Massas" ? styles.fundo : styles.btn}  onClick={()=>busca("Massas")}> <Image className={styles.btn_img} src={massas}/>  Massas</button>
        <button className={cor === "Carnes" ? styles.fundo : styles.btn}  onClick={()=>busca("Carnes")}> <Image className={styles.btn_img} src={carnes}/>  Carnes</button>

        <button className={cor === "Bebidas" ? styles.fundo : styles.btn}  onClick={()=>busca("Bebidas")}> <Image className={styles.btn_img} src={bebidas}/>  Bebidas</button>
        <button className={cor === "Saladas" ? styles.fundo : styles.btn}   onClick={()=>busca("Saladas")}> <Image className={styles.btn_img} src={saladas}/>  Saladas</button>
        <button className={cor === "Sobremesas" ? styles.fundo : styles.btn}   onClick={()=>busca("Sobremesas")}> <Image className={styles.btn_img}  src={sobremesas}/>  Sobremesas</button>

        </div>

        <CampoDeBusca texto={texto} handle={handleBusca}/>

    

        <div className={styles.container_card}>

      


    {produto.map((produto)=>{

       return(<Card 
        key={produto.id} 
        nome={produto.nome} 
        categoria={produto.categoria}
        descricao={produto.descricao}
        imagem={produto.imagem}
        preco={produto.preco}
      
        />)


})}


</div>



    </div>

    )

    
  
}


