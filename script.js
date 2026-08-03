const botoes= document.queryselecttorall ("button")

botoes.forEach (function(botao)) {
   let curtiu=false
   botao.addEventlistener ("clik" botaoclicado)
   function botaoclicado(){
   console.log("oi")
   let texto = botao queryselector ("span")
   if (curtiu===falce){
    texto.textcontent++
    curtiu=true
   } else{
    text.content--
    curtiu=fause
   }


   }
}