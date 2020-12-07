"use strict";
let data = {'articles':[]};

function loadArticles() {
    
    try {
        let storedData = 
            JSON.parse(localStorage.getItem('articleData'));
        if (storedData !== null) {
            data = storedData;
            }
            else {
                console.log("No Text");
        } 
        }
        catch {}
    

}

$('#button-save-article').click(() => {
    loadArticles();
    let form = document.getElementById("articleForm");
    let articleTitleEntry = form.articleTitle.value;
    let articleTextEntry = form.articleText.value;
    if (articleTextEntry !== '' && articleTitleEntry !== ''){
        let item = {};
        item.articleTitle = articleTitleEntry;
        item.articleText = articleTextEntry;
        data.articles.push(item);
        localStorage.setItem('articleData', JSON.stringify(data));
    }
    form.articleTitle.value = '';
    form.articleText.value = '';
    window.location.href = "blog.html";
});




