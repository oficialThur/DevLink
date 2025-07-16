const link = [
    {nome: "Portfolio", url:"..."},
    {nome: "Currículo", url:"https://drive.google.com/file/d/14AG1odOBB_DMQUttPBgw-rb_kzAxsHRs/view?usp=sharing"}
    //add mais itens aqui
];

const ul = document.getElementById("lista-links");

link.forEach(link => {
    const li =document.createElement("li");
    const a = document.createElement("a")
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.nome;
    // Se for o Portfolio, adiciona id para identificar
    if(link.nome === "Portfolio"){
        a.id = "portfolio-link";
        a.href = "#";
    }
    li.appendChild(a);
    ul.appendChild(li);
});

// Modal Portfolio
const portfolioLink = document.getElementById("portfolio-link");
const modalPortfolio = document.getElementById("modal-portfolio");
const closeModal = document.getElementById("close-modal-portfolio");

if(portfolioLink && modalPortfolio && closeModal){
    portfolioLink.addEventListener("click", function(e){
        e.preventDefault();
        modalPortfolio.style.display = "flex";
    });
    closeModal.addEventListener("click", function(){
        modalPortfolio.style.display = "none";
    });
    // Fechar ao clicar fora do conteúdo
    modalPortfolio.addEventListener("click", function(e){
        if(e.target === modalPortfolio){
            modalPortfolio.style.display = "none";
        }
    });
}