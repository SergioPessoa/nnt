/* const pesonagem: pegar toda a lista de personagem com "querySelectorAll" (usa o "." para indicar que "personagem" eh uma classe) */
const personagens = document.querySelectorAll(".personagem")

/*OBS: Para fazer essa função de baixo funcionar(forEach), eh necessário usar essa função de cima(querySelectorAll) */

/*Personagem.forEach: seleciona os personagens separadmanete para poder aparecer a borda de fumaça. Só depois usa o "addEventListener", que é o evento q vai acontercer com todos os personagem 1 por 1, que esta na lista de "personagens". Arrow Function(função de seta), é para fazer o efeito de passar o mouse por cima do personagem usando "mouseenter" (entre com mouse) */
personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }


        // /*const personagemselecionado: usa o "querySelector"(tb usa "." pra indicar que "selecionado" é uma classe), pra pegar a classe "selecionado" (que no caso ta no meliodas por padrao) e poe em todos. Usa "classList.remove(nao tem "." pq ja ta indicando q eh uma classe)" para REMOVER a fumaça de seleção instantaneamente quando o mouse sai de cima do personagem. 
        const personagemselecionado = document.querySelector(".selecionado");
        personagemselecionado.classList.remove("selecionado");
        // Usa "classList.add" (ja indica q eh class tb) para ADICIONAR a fumaça de seleção instantaneamente quando o mouse passa por cima */
        personagem.classList.add("selecionado");


        /*const imagempersonagemgrande: usa para "consultar a selecao" (querySelector) dos persoangens grandes. */
        const imagemPersonagemGrande = document.querySelector(".personagem-grande");

        /*const idPersonagem: usado para pegar o id dos perosnagens. "attributes.id.value"(vai em atributos em id e pega o valor deles)". imagempersonagemgrande.src: para pegar a imagem q ta salva na pasta "imagens", porém temos que usar um "templatestring"(que é o nome dado por essa funcao: `` duas crase e "$"+ "{}" para pegar todas as imagens com o id:perosnagem)", que eh a funçao de amarrar todas as imagens com o id: personagem */
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        /*OBS: Para fazer essas duas funções de baixo funcionarem(getElementById), eh necessário usar essa função de cima(const idPersonagem) */

        /*const nomepersonagem: pega elemento de id(getElementById), dentro do HTML(usando "document." que eh o apelido que o js usa para se referir ao HTML) no caso "nome-personagem". nomePersonagem.innerText (dentro do texto/no texto), pega a "class personagem", e da um atributo para ela (getAttribute), no caso "data-personagem", isso faz com que o nome dos personagem mude de acordo com o personagem q for sendo selecionado. */
        const nomePersonagem = document.getElementById("nome-personagem");
        nomePersonagem.innerText = personagem.getAttribute("data-name")

        /*const descricaopersonagem: pega elemento de id(getElementById), dentro do HTML (usando "document." que eh o apelido que o js usa para se referir ao HTML), no caso "descricao-personagem". descricaopersonagem.innerText (dentro do texto/no texto), pega a "class personagem", e da um atributo para ela (getAttribute), no caso "data-description", isso faz com que a descrição dos personagem mude de acordo com o personagem q for sendo selecionado. */
        const descricaoPersonagem = document.getElementById("descricao-personagem")
        descricaoPersonagem.innerText = personagem.getAttribute("data-description")

    })
})