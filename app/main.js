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
                console.log('A imagem existe.');
                let elemento = document.querySelector(`#${project.name}`);
                if(elemento != null){
                    elemento.src = `./img/${project.name}.png`
                }
            }
        });
    })
}