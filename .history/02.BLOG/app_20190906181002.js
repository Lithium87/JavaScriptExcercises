function loadPosts() {
    let select = document.getElementById('posts');

    fetch('https://blog-apps-c12bf.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(data => {
            let fragment = document.createDocumentFragment();

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    let option = document.createElement('option');
                    option.value = element.id;
                    option.innerHTML = element.title;

                    fragment.appendChild(option);
                }
            }
            select.appendChild(fragment);
        })
}