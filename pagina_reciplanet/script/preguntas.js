let base_preguntas = readText("pregunta.json")
let interprete_bp = JSON.parse(base_preguntas)
let pregunta
let btn_correspondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]

function escogerPreguntaAleatoria(){
    escogerPregunta(Math.floor(Math.random()*interprete_bp.lenght))
}

function escogerPregunta(n){
    pregunta = interprete_bp[n]
    select_id("categoría").innerHTML = pregunta.categoría
    select_id("pregunta").innerHTML = pregunta.pregunta
    select_id("imagen").setAttribute("src",pregunta.imagen)
    style("imagen").objectFit = pregunta.objectFit;
    select_id("btn1").innerHTML = pregunta.respuesta
    select_id("btn2").innerHTML = pregunta.incorrecta1
    select_id("btn3").innerHTML = pregunta.incorrecta2
    select_id("btn4").innerHTML = pregunta.incorrecta3

    if(pregunta.imagen){
        style("imagen").height="200px"
        style("imagen").width="100%"
    }
    else{
        style("imagen").height="0px"
        style("imagen").width="0px"
    }
}

let btns= [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]

function desordenarRespuestas(Pregunta){
    let Posibles_respuestas =[
        pregunta.respuesta, 
        pregunta.incorrecta1, 
        pregunta.incorrecta2, 
        pregunta.incorrecta3 
    ]
    arr.sort(()=>Math.random()-0.5)

    select_id("btn1").innerHTML = Posibles_respuestas[0]
    select_id("btn2").innerHTML = Posibles_respuestas[1]
    select_id("btn3").innerHTML = Posibles_respuestas[2]
    select_id("btn4").innerHTML = Posibles_respuestas[3]
}

function oprimir_btn (i) {
    
    if (Posibles_respuesta[i] == pregunta.respuesta) {
        btn_correspondiente[i].style.background = "lightgreen"
    }
    else{
        btn_correspondiente[i].style.background = "lightred"
    }

    setTimeout(()=>{
        reiniciar()
    }, 3000)

}

function reiniciar(){
   for (const btn of btn_correspondiente){
    btn.style.background = "white"
   }
   escogerPreguntaAleatoria()
}


function select_id(id){
    return document.getElementById(id)
}

function style(id){
return select_id(id).style
}

function readText(ruta_local){
    var texto= null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false)
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto == xmlhttp.responseText
    }
    returntexto;
}