function loadCommits() {
    let userName = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let contentDiv = document.getElementById('commits').value;
    contentDiv.innerHTML = 'Loading...';

    fetch(`https://github.com/repos/${userName}/${repository}/commits`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response.err);
            }
            response.json()
        })
        .then((data) => {
            contentDiv.innerHTML = '';

            let messages = data.map((item) => {
                return item.commit.message;
            });

            for (const key in message) {
                if (message.hasOwnProperty(key)) {
                    const message = message[key];
                    contentDiv.innerHTML = `<h1>${message}</h1>`;
                }
            }
        })
        .catch(err => {
            console.log('Error', err);
        });
}