let projects = [];
const myProfile = "ilevex0";
const APIEndPoint = `https://api.github.com/users/${myProfile}/repos`;

getProjectsAPI();

async function getProjectsAPI() {
    const response = await fetch(APIEndPoint);
    projects = await response.json();
    const sortedData = sortByDate(projects); //Verifica as datas e coloca os projetos mais recentes em primeiro.
    showProjectsOnScreen(sortedData);
    //adiciona imagem a todos os projetos
    projects.forEach(project => {
        verifyIfHasImage(project.name, (exists) => {
            if (exists) {
                //console.log('A imagem existe.');
                let elemento = document.querySelector(`#${project.name}`);
                if(elemento != null){
                    elemento.src = `./img/${project.name}.png`
                }
            }
        });
    })
    //adiciona alterações no projeto do site do portfólio
    const thisWebsite = document.getElementById(`${myProfile}.github.io`);
    thisWebsite.src = `./img/thiswebsite.png`;
    const thisWebsitePageLink = document.querySelector(`a[href='https://${myProfile}.github.io/']`);
    const thisWebsiteButtonLink = document.querySelector(`a.projects__container__link[href='https://${myProfile}.github.io/']`);
    thisWebsitePageLink.href = `https://github.com/${myProfile}/${myProfile}.github.io`;
    thisWebsiteButtonLink.href = `https://github.com/${myProfile}/${myProfile}.github.io`;

}