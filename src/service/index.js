import { produtos } from "@/data/data-produtos"

function start(){

    return produtos.filter((produto)=> produto.categoria === "Entradas")
    
  }





function filtro(categoria, setProdutos, setCor,setTexto){

    return (produtos.filter((produto)=> produto.categoria === categoria)   )
    
   
  }
  
  
  function buscarProduto(textoDigitado){


   return produtos.filter((produto)=>{
      if(textoDigitado.length > 3){
    return    produto.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) ||
        produto.descricao.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
      }
      })
   
  
  }
  


  

  export  {filtro, buscarProduto, start};