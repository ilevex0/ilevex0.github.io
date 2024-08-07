const sectionProjects = document.querySelector(".projects");

function showProjectsOnScreen(projectsList) {
    sectionProjects.innerHTML = ``;
    projectsList.forEach(project => {
        sectionProjects.innerHTML += `
                        <div class="projects__container">
                        <ul class="projects__container__list">
                            <li class="projects__container__item">
                                <a class="projects__container__image" href="${verifyIfHasPage(project)}" target="_blank">
                                    <img src="./img/ilevex0.png" id="${project.name}" alt="${project.description}">
                                </a>
                                <h2 class="projects__container__title">${project.name}<b class="main__bold"> (${project.language})</b></h2>
                                <p class="projects__container__description">${project.description}</p>
                                <div class="projects__container__div">
                                    <a class="projects__container__link" href="${verifyIfHasPage(project)}" target="_blank">📃 Access page</a>
                                    <a class="projects__container__link" href="${project.html_url}" target="_blank"><img class="social-icon" src="img/socials/github-low-q.png"> Repository</a>
                                </div>
                            </li>
                        </ul>
                    </div>
            `;
    });
}