// Função que será chamada ao clicar no botão
function consultarCnpj() {
    // Obtém o valor do campo CEP
    const cnpj = document.getElementById('cep').value;

    // Verifica se o CEP tem 8 dígitos


    // URL da API de CEP (usando o serviço ViaCEP como exemplo)
    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    // Faz uma requisição à API para obter os dados do CEP
    fetch(url)
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => {
            // Verifica se o CEP foi encontrado
            if (data.erro) {
                alert("CEP não encontrado.");
                return; // Interrompe a execução se o CEP não for válido
            }

            // Atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('razao_social').textContent = data.razao_social;
            document.getElementById('nome_fantasia').textContent = data.nome_fantasia;
            document.getElementById('cidade').textContent = data.municipio;
            document.getElementById('estado').textContent = data.uf;
            document.getElementById('cnae').textContent = data.cnae_fiscal_descricao;
        })
        .catch(error => {
            console.error("Erro ao consultar o CEP:", error); // Loga erros no console
            alert("Ocorreu um erro ao consultar o CEP.");
        });
}