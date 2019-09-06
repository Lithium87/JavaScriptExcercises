function loadCommits() {
    let userName = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;

    fetch(`https://github.com/repos/${userName}/${repository}/commits`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}