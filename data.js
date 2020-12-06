"use strict";
let data = {'articles':[]};

function saveArticle() {
    
    try {
        let storedData = 
            JSON.parse(localStorage.getItem('articleData'));
        if (storedData !== null) {
            data = storedData;
            console.log("You added data")
            }
            else {
                console.log("No Text");
        } 
        }
        catch {}
    

}

$('#button-save-article').click(() => {
    let form = document.querySelectorAll(".articleForm");
    let articleTitleEntry = form.articleTitle.value;
    let articleTextEntry = form.articleText.value;
    if (articleTextEntry !== '' && articleTitleEntry !== ''){
        let item = {};
        item.articleTitle = articleTitleEntry;
        item.articleText = articleTextEntry;
        data.articles.push(item);
        localStorage.setItem('articleData', JSON.stringify(data));
    }
    form.articleTitle = '';
    form.articleText = '';
    saveArticle();
});

function addArticle(){
    let articleList = document.querySelector('#article-cards');
    
    
}


