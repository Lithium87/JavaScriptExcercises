function loadPosts() {
    fetch('https://blog-apps-c12bf.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}