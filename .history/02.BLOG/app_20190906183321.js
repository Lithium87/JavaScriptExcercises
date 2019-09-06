let select = document.getElementById('posts');
let allPosts = [];

function loadPosts() {
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
        })
}

function viewPosts() {
    let postId = select.value;
    for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].id === postId) {
            console.log(allPosts[i]);
            return;
        }
    }
}