let nomeUsuario = prompt("Qual o seu nome?")

let modelo 
let gola 
let tecido

let modelos = [];

function exibirModelos () {
    let listaDeModelos = document.querySelector('.ultimosPedidos');

    listaDeModelos = '';

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
    //console.log(elemento, elemento.parentNode)

    if (elemento.parentNode.classList.contains("opcoes-modelo")) {
        if (elemento.classList.contains("opcao1")) {
            modelo = "t-shirt" 
        } 
        if (elemento.classList.contains("opcao2")) {
            modelo =  "top-tank"
        }
        if (elemento.classList.contains("opcao3")) {
            modelo =  "long"
        }
    } 

    if (elemento.parentNode.classList.contains("opcoes-gola")) {
        if (elemento.classList.contains("opcao1")) {
            gola = "v-neck" 
        } 
        if (elemento.classList.contains("opcao2")) {
            gola =  "round"
        }
        if (elemento.classList.contains("opcao3")) {
            gola =  "polo"
        }
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

    console.log("modelo: ",modelo)
    console.log("gola: ",gola)
    console.log("tecido: ",tecido)

    //chamar a função de verifiacr o botão aqui!!!
}

function enviarPedido(){
    const input = document.querySelector('input')
    const urlDaImagem = input.value

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
        console.log("Erro ao receber os modelos", err)
    });
    
  
    
}

function resChegaram(res) {
    console.log ("modelos chegaram", res.data);
    modelos = res.data;

    exibirModelos();
}

/*function res() {
    console.log('pedido feito', res)

    pegarModeloEscolhido()
}*/





//criar a lista vazia dos ultimos pedidos

/*const dados = {
    model: "t-shirt" | "top-tank" | "long",
    neck: "v-neck" | "round" | "polo",
    material: "silk" | "cotton" | "polyester",
    image: string no formato de url,
    owner: string,
    author: string
}*/



/*const ul = document.querySelector
function processarResposta(resposta) {
    for (let i=0; i <= ultimosPedidos.length; i++) {
        ul.innerHTML += `
            <li>
                <img src="${ultimosPedidos[i]}">
                <p class="criador">${nomeUsuario}</p>
            </li>
            `
    }
}
*/

//fazer o requerimento para o modelo escolhido pelo usuario

/* {
	"model": "t-shirt" | "top-tank" | "long",
	"neck": "v-neck" | "round" | "polo",
	"material": "silk" | "cotton" | "polyester",
	"image": string no formato de url,
	"owner": string,
	"author": string
}
 */

//adicionar o modelo escolhido na lista ultimosPedidos



// definir a função que irá adicionar os pedidos que vier do navegador


//exibir a lista atualizada dos ultimos pedidos feitos

/*[
	{
		"id": number,
		"model": string,
		"neck": string,
		"material": string,
		"image": string,
		"owner": string,
		"author": string
	}
] */

