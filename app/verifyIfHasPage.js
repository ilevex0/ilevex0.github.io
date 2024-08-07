function verifyIfHasPage(project) {
    return project.has_pages ? project.homepage : project.html_url;
}