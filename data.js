"use strict";


function saveArticle() {

    form = document.querySelectorAll(".articleForm")
    article = {"title":document.querySelectorAll(".articleTitle").value, "text":document.querySelectorAll(".articleText").value};

}

let saveButton = document.querySelectorAll(".button-save-article");
saveButton.addEventListener("click", saveArticle());