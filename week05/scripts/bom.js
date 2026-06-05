// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

let chaptersArray = getChapterList(); 

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

// wait for button clicks
buttonElement.addEventListener("click", function () {
    // Check if the user entered something
    if (inputElement.value != "") {
        // create list item and give it the value of the input
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        // clear the user input field
        inputElement.value = "";
        // focus the user back to the input field
        inputElement.focus();
    }
});

function displayList(item) {
    const li = document.createElement("li");
    li.textContent = item;
    // create a button and add a click event listener
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
        
    deleteBtn.addEventListener("click", function () {
            listElement.removeChild(li);
            deleteChapter(li.textContent);
            inputElement.focus();
        });
        // add the button to the list item
        li.appendChild(deleteBtn);
        // OUTPUT: finally display the completed list item to the unordered list
        listElement.appendChild(li);
}
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  const storedList = localStorage.getItem("myFavBOMList");
  return storedList ? JSON.parse(storedList) : [];
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);

    chaptersArray =
        chaptersArray.filter((item) => item != chapter);

    setChapterList();
}