$( document ).ready(function() {
    try {
        let storedData = JSON.parse(localStorage.getItem('articleData'));
        if (storedData !== null) {
           // console.log(storedData)
            addArticle(storedData);
        }
        else {
            console.log("No data");
        } 
    }
    catch {}
});

function addArticle(storedData){
    let articleList = document.querySelector('#article-cards');
    
    for (let article in storedData.articles){
        let newCardArticle = document.createElement("article");
        newCardArticle.classList.add("col-4");
        let newCardDiv = document.createElement("div");
        newCardDiv.classList.add("card", "my-2");
        let newCardBody = document.createElement("div");
        let newCardTitle = document.createElement("h5");
        let newCardText = document.createElement("p");
        
        newCardBody.classList.add("card-body");
        newCardTitle.classList.add("card-title");
        newCardTitle.innerText = storedData.articles[article].articleTitle;
        newCardText.classList.add("card-text");
        newCardText.innerText = storedData.articles[article].articleText;

        newCardBody.append(newCardTitle);
        newCardBody.append(newCardText);
        newCardDiv.append(newCardBody); 
        newCardArticle.append(newCardDiv);
        articleList.append(newCardArticle);
    }
    

}