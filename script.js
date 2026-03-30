// Preenchendo Informações Básicas
document.getElementById("titulo").textContent = empresa.nome + " | " + empresa.slogan;
document.getElementById("nomeEmpresa").textContent = empresa.nome;
document.getElementById("slogan").textContent = empresa.slogan;
document.getElementById("descricao").textContent = empresa.descricao;
document.getElementById("endereco").textContent = empresa.contato.endereco;

// Renderizando os Produtos
const container = document.getElementById("produtosContainer");

empresa.produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Adicionado loading="lazy" para melhor performance nas imagens
    card.innerHTML = `
        <img src="${produto.imagem}" alt="Imagem do produto: ${produto.nome}" loading="lazy">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
    `;

    container.appendChild(card);
});

// Configurando Links
document.getElementById("instagramLink").href = empresa.redesSociais.instagram;
document.getElementById("whatsappLink").href = empresa.redesSociais.whatsapp;

// Configurando Footer dinâmico
document.getElementById("empresaFooter").textContent = empresa.nome;
document.getElementById("ano").textContent = new Date().getFullYear();