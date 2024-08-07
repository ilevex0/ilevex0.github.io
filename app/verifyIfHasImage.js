function verifyIfHasImage(projectName, callback) {
    const url = projectName ? `./img/${projectName}.png` : `./img/ilevex0.png`;

    fetch(url, { method: 'HEAD' })
        .then(response => {
            callback(response.ok); // Se o status é 200-299, a imagem existe
        })
        .catch(() => {
            callback(false); // Se ocorreu um erro na requisição
        });
}