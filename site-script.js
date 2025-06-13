
const produtos = [
  {
    id: 1,
    nome: "Vestido Floral",
    categoria: "vestidos",
    preco: 129.90,
    imagem: "imagens/vestido1.jpg",
    descricao: "Vestido floral leve, perfeito para o verão.",
    tamanhos: ["P", "M", "G"],
    cores: ["Azul", "Rosa"],
    estoque: 5
  }
];

function exibirProdutos(categoria = '') {
  const lista = document.getElementById('lista-produtos');
  lista.innerHTML = '';
  const filtrados = categoria ? produtos.filter(p => p.categoria === categoria) : produtos;
  filtrados.forEach(p => {
    const item = document.createElement('div');
    item.innerHTML = \`
      <img src="\${p.imagem}" alt="\${p.nome}" width="150" />
      <h3>\${p.nome}</h3>
      <p>R$ \${p.preco.toFixed(2)}</p>
      <p>\${p.descricao}</p>
      <button onclick="adicionarAoCarrinho(\${p.id})">Adicionar</button>
    \`;
    lista.appendChild(item);
  });
}

function adicionarAoCarrinho(id) {
  alert("Produto " + id + " adicionado ao carrinho.");
}

function toggleCarrinho() {
  const container = document.getElementById('carrinho-container');
  container.style.display = container.style.display === 'block' ? 'none' : 'block';
}

window.onload = () => exibirProdutos();
