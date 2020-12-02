"use strict";
let data = {'articles':[]};

function saveArticle() {
    
    try {
        let storedData = 
            JSON.parse(localStorage.getItem('articleData'));
        if (storedData !== null) {
            data = storedData;
            console.log()
            }
            else {
                console.log("No Text");
        } 
        }
        catch {}
    

}

$('#button-save-article').click(() => {
    form = document.querySelectorAll(".articleForm");
    let articleTitle = form.querySelectorAll('#articleTitle');
    let articleText = form.querySelectorAll('#articleText');
    data.articles.push(articleTitle);
    data.articles.push(articleText);
    localStorage.setItem('articleData', JSON.stringify(data));
    saveArticle();
});
saveButton.addEventListener("click", saveArticle());
