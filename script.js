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
    li.appendChild(a);
    ul.appendChild(li);
});