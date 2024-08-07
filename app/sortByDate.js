function sortByDate(projects) {
    return projects.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}