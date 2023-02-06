let nomeUsuario = prompt("Qual o seu nome?")

let modelo 
let gola 
let tecido

let modelos = [];

function exibirModelos () {
    listaDeModelos = document.querySelector('.ultimosPedidos');
    
    for (let index = 0; index < modelos.length; index++) {
        let template = `
            <li>
                <img src="${modelos[index].image}">
                <p class="criador">${nomeUsuario}</p>
            </li>
        `;
        listaDeModelos.innerHTML = listaDeModelos.innerHTML + template;
    }
    
}

pegarModeloEscolhido();

exibirModelos();

function selecionarOpcao(elemento) {

    if (elemento.parentNode.classList.contains("opcoes-modelo")) {
        if (elemento.classList.contains("opcao1") ) {
            modelo = "t-shirt";
            
        } 
        if (elemento.classList.contains("opcao2")) {
            modelo =  "top-tank";
            
        }
        if (elemento.classList.contains("opcao3")) {
            modelo =  "long";
            
        }
        
    if (elemento.parentNode.classList.contains("opcoes-gola")) {
        if (elemento.classList.contains("opcao1")) {
            gola = "v-neck";
           
        } 
        if (elemento.classList.contains("opcao2")) {
            gola =  "round";
            
        }
        if (elemento.classList.contains("opcao3")) {
            gola =  "polo";
            
        }
        console.log(elemento)
    } 

    if (elemento.parentNode.classList.contains("opcoes-tecido")) {
        if (elemento.classList.contains("opcao1")) {
            tecido = "silk" 
           
        } 
        if (elemento.classList.contains("opcao2")) {
            tecido =  "cotton"
            
        }
        if (elemento.classList.contains("opcao3")) {
            tecido =  "polyester"
           
        }
    } 
    
    
    
    //chamar a função de verifiacr o botão aqui!!!
}
}
//verificar se o elemento esta com a classe selecionado aplicada
//desmarcar essa classe ao clicar em outra opçao
function modeloSelecionado(elemento){
    const modeloAnterior = document.querySelector('.modelo .selecionado');

    if (modeloAnterior !== null) {
        modeloAnterior.classList.remove('selecionado');

    }
    elemento.classList.add('selecionado');

    validarBotaoConfirmarPedido ()
}
function golaSelecionada(elemento){
    const golaAnterior = document.querySelector('.gola .selecionado');
   
    if (golaAnterior !== null) {
        golaAnterior.classList.remove('selecionado');

    }
    elemento.classList.add('selecionado');
    
    validarBotaoConfirmarPedido ()
}

function tecidoSelecionado(elemento){
    const tecidoAnterior = document.querySelector('.tecido .selecionado');
    
    if (tecidoAnterior !== null) {
        tecidoAnterior.classList.remove('selecionado');

    }

    elemento.classList.add('selecionado');
  
    validarBotaoConfirmarPedido ()
} 


function enviarPedido(){
    const input = document.querySelector('input');
    const urlDaImagem = input.value;
    console.log (input)

    const body = {
        model: modelo,
        neck: gola,
        material: tecido,
        image: urlDaImagem,
        owner: nomeUsuario,
        author: nomeUsuario,
    }
    post(body);
}

function post(body) {
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', body);
    promise.then((res) => {
        console.log("Deu tudo certo");
    });
    promise.catch((err) => {
        alert("Ops, algo deu errado. Tente novamente")
        console.log("deu erro", err);
    });

    pegarModeloEscolhido()
}

function pegarModeloEscolhido() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promise.then(resChegaram);
    
    promise.catch((err) => {
        alert("Ocorreu um erro inesperado no servidor!")
        console.log("Erro ao receber os modelos", err)
    });    
}

function resChegaram(res) {
    console.log ("modelos chegaram", res.data);
    modelos = res.data;

    exibirModelos();
}


function validarBotaoConfirmarPedido (botao) {
   //verificar se o modelo está vazio
    if (modelo !== undefined) {
     // verificar se a gola está vazia
        if (gola !== undefined){
    //verificar se o tecido está vazio
             if (gola !== undefined){
    //verificar se a url está vazia
                if (input !== undefined) {
                    const confirmarBotao = document.querySelector('.confirmar');

                    confirmarBotao.classList.add('confirmarPedido');
                }
            }
        }
    }
    console.log(botao)
}

