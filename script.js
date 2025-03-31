const chamarTituloGeradoForm = document.querySelector("#input-titulo-form");
const chamarTamanhoFonteTituloGeradoForm = document.querySelector("#input-tamanho-fonte-titulo-form");
const chamaCorTituloGeradoForm = document.querySelector("#input-cor-titulo-form");
const chamaCorFundoGeradoForm = document.querySelector("#input-cor-fundo-titulo-form");
const chamaTipoCampo = document.querySelector("#input-selecionar-tipo-campo");
const chamaNomeCampo = document.querySelector("#input-titulo-label-campo");

// Novos campos para borda
const chamaCorBordaForm = document.querySelector("#input-cor-borda-form");
const chamaEspessuraBordaForm = document.querySelector("#input-espessura-borda-form");
const chamaEstiloBordaForm = document.querySelector("#input-estilo-borda-form");

// Onde vai aparecer
const ondeVaiAparecerTitulo = document.querySelector("#titulo-form-gerado");
const ondeVaiAparecerForm = document.querySelector("#formulario");
const ondeACorDoFundoVaiAparecer = document.querySelector("#criado");

// Adicionando eventos
chamaCorTituloGeradoForm.addEventListener("input", atualizar);
chamarTamanhoFonteTituloGeradoForm.addEventListener("input", atualizar);
chamarTituloGeradoForm.addEventListener("input", atualizar);  // Adicionado o evento para o título também
chamaCorFundoGeradoForm.addEventListener("input", atualizar);  // Novo evento para a cor de fundo
chamaCorBordaForm.addEventListener("input", atualizar);
chamaEspessuraBordaForm.addEventListener("input", atualizar);
chamaEstiloBordaForm.addEventListener("input", atualizar);

// Função para atualizar o título
function atualizar() {
    ondeVaiAparecerTitulo.textContent = chamarTituloGeradoForm.value;
    ondeVaiAparecerTitulo.style.fontSize = chamarTamanhoFonteTituloGeradoForm.value + "px"; // Garantindo que o valor tenha a unidade 'px'
    ondeVaiAparecerTitulo.style.color = chamaCorTituloGeradoForm.value;
    ondeACorDoFundoVaiAparecer.style.backgroundColor = chamaCorFundoGeradoForm.value;

    const corBorda = chamaCorBordaForm.value;
    const espessuraBorda = chamaEspessuraBordaForm.value;
    const estiloBorda = chamaEstiloBordaForm.value;

    ondeACorDoFundoVaiAparecer.style.border = `${espessuraBorda}px ${estiloBorda} ${corBorda}`;
}


function adicionarCampo(e){
    e.preventDefault();  // Previne o envio do formulário

    const campoFormulario = document.createElement('div');
    campoFormulario.className = 'campo-formulario';
    const label = document.createElement('label');
    label.textContent = chamaNomeCampo.value;
   


    const tamanhoFonteLabel = document.querySelector("#input-tamanho-fonte-label").value;
    label.style.fontSize = tamanhoFonteLabel + "px";  // Definindo o tamanho da fonte do label
    
    const chamaCorTituloLabel = document.querySelector("#input-cor-titulo-label-campo").value;
    label.style.color = chamaCorTituloLabel;
    label.classList.add("titulo-label");

    let input; 

    if (chamaTipoCampo.value === 'select') {
        input = document.createElement('select');

        // Adiciona opções ao select aqui, se necessário
        const option1 = document.createElement('option');
        option1.value = 'opcao1'; // Ajuste para valores reais
        option1.textContent = 'Opção 1'; // Ajuste para opções reais
        input.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = 'opcao2'; // Ajuste para valores reais
        option2.textContent = 'Opção 2'; // Ajuste para opções reais
        input.appendChild(option2);
    } else {
        input = document.createElement('input');
        input.type = chamaTipoCampo.value;
    }

    const placeholder = document.querySelector("#input-placeholder-label-campo").value;
    input.placeholder = placeholder;

    const tamanhoFontePlaceholder = document.querySelector("#input-tamanho-fonte-placeholder").value;
    input.style.fontSize = tamanhoFontePlaceholder + "px";

    input.classList.add("input-style");

    // Adiciona restrições com base no tipo de campo
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

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.className = 'excluir-campo';
    botaoExcluir.onclick = function() {
        campoFormulario.remove();
    };

    const botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = 'Salvar';
    botaoSalvar.className = 'salvar-campo';
    botaoSalvar.onclick = function() {
        botaoExcluir.remove();
        botaoSalvar.remove();
    };

    campoFormulario.appendChild(label);
    campoFormulario.appendChild(input);
    campoFormulario.appendChild(botaoExcluir);
    campoFormulario.appendChild(botaoSalvar);
    ondeVaiAparecerForm.appendChild(campoFormulario);
};

// Adicionando o evento ao botão "Gerar campo"
document.getElementById('gerar-campo-botao').addEventListener('click', adicionarCampo);