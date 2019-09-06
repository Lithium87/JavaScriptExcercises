function loadPosts() {
    fetch('https://blog-apps-c12bf.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    console.log(element);

                }
            }
        })
}