(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = document.getElementById('cat-template').innerHTML;
        let compiled = Handlebars.compile(template);

        let rendered = compiled({
            cats: window.cats
        });

        document.getElementById('allCats').innerHTML = rendered;

        let showBtn = document.getElementsByClassName('showBtn')[0];

        showBtn.addEventListener('click', function() {
            let clickedBtn = this;
            if (clickedBtn.textContent === 'Show status code') {
                clickedBtn.textContent = 'Hide status code';
                clickedBtn.nextSibling.style.display = 'block';
                document.getElementById('100').style.display = 'block';
            }
        });
    }

})();