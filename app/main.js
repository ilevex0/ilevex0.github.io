let projects = [];
const myProfile = "ilevex0";
const APIEndPoint = `https://api.github.com/users/${myProfile}/repos`;
const APIProfileEndPoint = "https://api.github.com/users/ilevex0";

getProjectsAPI();

async function getProjectsAPI() {
    const response = await fetch(APIEndPoint);
    projects = await response.json();
    const sortedData = sortByDate(projects); //Verifica as datas e coloca os projetos mais recentes em primeiro.
    showProjectsOnScreen(sortedData);
    console.log(sortByDate(projects));
}