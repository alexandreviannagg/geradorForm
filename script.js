let chamarTituloGeradoForm = document.querySelector("#input-titulo-form");
let chamarTamanhoFonteTituloGeradoForm = document.querySelector("#input-tamanho-fonte-titulo-form");
let chamaCorTituloGeradoForm = document.querySelector("#input-cor-titulo-form");
let chamaCorFundoGeradoForm = document.querySelector("#input-cor-fundo-titulo-form");
let chamaTipoCampo = document.querySelector("#input-selecionar-tipo-campo");
let chamaNomeCampo = document.querySelector("#input-titulo-label-campo");




let chamaCorBordaForm = document.querySelector("#input-cor-borda-form");
let chamaEspessuraBordaForm = document.querySelector("#input-espessura-borda-form");
let chamaEstiloBordaForm = document.querySelector("#input-estilo-borda-form");





let ondeVaiAparecerTitulo = document.querySelector("#titulo-form-gerado");
let ondeVaiAparecerForm = document.querySelector("#formulario");
let ondeACorDoFundoVaiAparecer = document.querySelector("#criado");





chamaCorTituloGeradoForm.addEventListener("input", atualizar);
chamarTamanhoFonteTituloGeradoForm.addEventListener("input", atualizar);
chamarTituloGeradoForm.addEventListener("input", atualizar);  
chamaCorFundoGeradoForm.addEventListener("input", atualizar);  
chamaCorBordaForm.addEventListener("input", atualizar);
chamaEspessuraBordaForm.addEventListener("input", atualizar);
chamaEstiloBordaForm.addEventListener("input", atualizar);

let atualizacaoExecutada = false;

function atualizar() {
    atualizacaoExecutada = true

    ondeACorDoFundoVaiAparecer.style.cssText = "padding: 10px";
    ondeVaiAparecerTitulo.textContent = chamarTituloGeradoForm.value;
    ondeVaiAparecerTitulo.style.fontSize = chamarTamanhoFonteTituloGeradoForm.value + "px"; 
    ondeVaiAparecerTitulo.style.color = chamaCorTituloGeradoForm.value;
    ondeACorDoFundoVaiAparecer.style.backgroundColor = chamaCorFundoGeradoForm.value;

    let corBorda = chamaCorBordaForm.value;
    let espessuraBorda = chamaEspessuraBordaForm.value;
    if (espessuraBorda > 10) {
        espessuraBorda = 10;
    }
    let estiloBorda = chamaEstiloBordaForm.value;

    ondeACorDoFundoVaiAparecer.style.border = `${espessuraBorda}px ${estiloBorda} ${corBorda}`;

    if (chamarTamanhoFonteTituloGeradoForm.value < 24) {
        chamarTamanhoFonteTituloGeradoForm = 24;
    }

    if (chamarTamanhoFonteTituloGeradoForm.value > 60) {
        chamarTamanhoFonteTituloGeradoForm = 60
    }
}

function garantirExecucao() {
    if (!atualizacaoExecutada) {
        alert("Informe um titulo do fumulário antes de criar um campo, por favor");
        return;  
    }
}
document.querySelector("#input-selecionar-tipo-campo").addEventListener("change", desativarOpcoes);

function desativarOpcoes() {
    let placeholderDisplays = document.querySelectorAll(".placeholder-display"); 
    let fonteLabel = document.querySelectorAll(".label-display");
    let corCampo = document.querySelectorAll(".cor-label-display");
    let tituloCampoDisplay = document.querySelectorAll(".label-display-tiulo");
    let botaoCampo = document.querySelector("#gerar-campo-botao");

    if (chamaTipoCampo.value === "submit" || chamaTipoCampo.value === "date" || chamaTipoCampo.value === "select") {

        corCampo.forEach(function (cor) {
            cor.style.display = "none";
        });

        fonteLabel.forEach(function (label) {
            label.style.display = 'none';
        });


        placeholderDisplays.forEach(function (placeholder) {
            placeholder.style.display = "none";
        });

        if(chamaTipoCampo.value === "select") {
            document.querySelector(".select-inserir-option").style.display = 'block';
            document.querySelector(".display-select-gerado").style.display = 'block';



            tituloCampoDisplay.forEach(function (titulo) {
                titulo.style.display = "none"
            });
            botaoCampo.style.display = 'none';
        } else {
            document.querySelector(".select-inserir-option").style.display = 'none';
            document.querySelector(".display-select-gerado").style.display = 'none';



            tituloCampoDisplay.forEach(function (titulo) {
                titulo.style.display = "block";
            });
            botaoCampo.style.display = 'block';
        }
    } else {
        corCampo.forEach(function (cor) {
            cor.style.display = "block";
        });


        fonteLabel.forEach(function (label) {
            label.style.display = 'block';
        });


        placeholderDisplays.forEach(function (placeholder) {
            placeholder.style.display = "block";
        });
    }
}


let select = document.querySelector("#select-gerado");


document.querySelector(".botao-inserir-select").addEventListener("click", gerarSelect);
let contOption = 0;


function gerarSelect(e) {
    e.preventDefault(); 

    if (!atualizacaoExecutada) {
        alert("Informe um titulo do formulário antes de criar um campo, por favor");
        return; 
    }
    
    if(chamaTipoCampo.value === 'select') {
        
        let valorOption = document.querySelector("#inserir-option").value;

        
        let option = document.createElement('option');
        option.setAttribute("value", "opcao" + contOption+1);
        option.textContent = valorOption;
        

      
        select.appendChild(option);

      
        document.querySelector("#inserir-option").value = "";

        console.log(valorOption + " foi adicionada ao novo select!");
    }
}










let campoAtivo = false;  

chamaTipoCampo.addEventListener("change", function () {
    campoAtivo = false;  
});


function adicionarCampo(e) {
    e.preventDefault();  
    if (!atualizacaoExecutada) {
        alert("Informe um titulo do formulário antes de criar um campo, por favor");
        return;  
    }

    if (campoAtivo) {
        alert("Você precisa salvar ou excluir o campo atual antes de adicionar outro.");
        return;  
    }

    campoAtivo = true; 

    let campoFormulario = document.createElement('div');
    campoFormulario.className = 'campo-geral';


    let label;
    label = document.createElement('label');
    label.className = 'titulo-label';
    label.innerHTML = chamaNomeCampo.value;

    if (!chamaNomeCampo.value) {
        alert("Você não informou o titulo do campo");
        return;
    }


    let tamanhoFonteLabel = document.querySelector("#input-tamanho-fonte-label").value;
    if (tamanhoFonteLabel < 16) {
        tamanhoFonteLabel = 16;
    }

    if (tamanhoFonteLabel > 30) {
        tamanhoFonteLabel = 30;
    }
    label.style.fontSize = tamanhoFonteLabel + "px";

    let corLabel = document.querySelector("#input-cor-titulo-label-campo").value;
    label.style.color = corLabel;

    let input;

    if (chamaTipoCampo.value === 'op') {
        alert("Você não selecionou nenhum campo. Por favor, selecione");
        return;
    }

    if (chamaTipoCampo.value === 'textarea') {
        input = document.createElement('textarea');
        input.style.cssText = "resize: none;";
        input.rows = 5;
    } else if (chamaTipoCampo.value === "submit") {
        input = document.createElement('input');
        input.value = chamaNomeCampo.value;
        input.type = chamaTipoCampo.value;
        input.style.cssText = "cursor: pointer; text-transform: uppercase; "

      
    } else {
        input = document.createElement('input');
        input.type = chamaTipoCampo.value;
    }

    let placeholder = document.querySelector("#input-placeholder-label-campo").value;
    input.placeholder = placeholder;

    let tamanhoFontePlaceholder = document.querySelector("#input-tamanho-fonte-placeholder").value;
    if (tamanhoFontePlaceholder < 12) {
        tamanhoFontePlaceholder = 12;
    }

    if (tamanhoFontePlaceholder > 18) {
        tamanhoFontePlaceholder = 18;
    }
    input.style.fontSize = tamanhoFontePlaceholder + "px";

    input.classList.add("input-style");



    switch (chamaTipoCampo.value) {
        case 'text':
            input.setAttribute('oninput', 'this.value = this.value.replace(/[^a-zA-Z\s]/g, "")');
            break;
        case 'name':
            input.setAttribute('oninput', 'this.value = this.value.replace(/[^a-zA-Z\s]/g, "")');
            break;
        case 'tel':
            input.setAttribute('maxlength', '11');
            input.setAttribute('oninput', 'this.value = this.value.replace(/[^0-9]/g, "")');
            break;
    }


    let divBotoes = document.createElement('div');
    divBotoes.className = 'botoes-container'; 
    divBotoes.style.cssText = "display:flex; justify-content: space-evenly; margin-top: 10px;"

    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'X';
    botaoExcluir.className = 'excluir-salvar';
    botaoExcluir.onclick = function () {
        campoFormulario.remove();
        campoAtivo = false;  
    };

    let botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = '✓';
    botaoSalvar.className = 'excluir-salvar';
    botaoSalvar.onclick = function () {
        botaoExcluir.remove();
        botaoSalvar.remove();
        campoAtivo = false;
    };

    divBotoes.appendChild(botaoExcluir);
    divBotoes.appendChild(botaoSalvar);



    if (chamaTipoCampo.value != 'submit') {
        campoFormulario.appendChild(label);
    }
    campoFormulario.appendChild(input);
    campoFormulario.appendChild(divBotoes); 

 
    ondeVaiAparecerForm.appendChild(campoFormulario);
}




document.getElementById('gerar-campo-botao').addEventListener('click', adicionarCampo);


chamaCorTituloGeradoForm.addEventListener("input", garantirExecucao);
chamarTamanhoFonteTituloGeradoForm.addEventListener("input", garantirExecucao);
chamarTituloGeradoForm.addEventListener("input", garantirExecucao);  
chamaCorFundoGeradoForm.addEventListener("input", garantirExecucao); 
chamaCorBordaForm.addEventListener("input", garantirExecucao);
chamaEspessuraBordaForm.addEventListener("input", garantirExecucao);
chamaEstiloBordaForm.addEventListener("input", garantirExecucao)