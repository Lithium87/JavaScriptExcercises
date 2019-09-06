let select = document.getElementById('posts');
let allPosts = [];

function loadPosts() {
    select.innerHTML = '';

    fetch('https://blog-apps-c12bf.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(data => {
            let fragment = document.createDocumentFragment();

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    allPosts.push(element);
                    let option = document.createElement('option');
                    option.value = element.id;
                    option.innerHTML = element.title;

                    fragment.appendChild(option);
                }
            }
            select.appendChild(fragment);
        });
}

function viewPosts() {
    let commentsDiv = document.getElementById('post-comments');
    commentsDiv.innerHTML = '';
    let postId = select.value;

    for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].id === postId) {
            document.getElementById('post-title').innerHTML = `<h1>${allPosts[i].title}</h1>`;
            document.getElementById('post-body').innerHTML = `<h2>${allPosts[i].body}</h2>`;

            fetch('https://blog-apps-c12bf.firebaseio.com/comments.json')
                .then(response => response.json())
                .then(data => {
                    let fragment = document.createDocumentFragment();

                    for (const key in data) {
                        if (data.hasOwnProperty(key)) {
                            const element = data[key];
                            if (element.postId == postId) {
                                commentsDiv.innerHTML = `<h4>${element.text}</h4>`;
                            }
                        }
                    }
                });

            return;
        }
    }
}