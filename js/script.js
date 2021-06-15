const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1
let cat = {
    complain: function (complaint) {
        console.log(complaint);
    }
};

cat.complain("Meow!");

// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2rem";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    const allParagraphs = paragraphs[i];
    allParagraphs.style.color = "red";
}

// Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7
function createList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

createList(cats);

// Question 8
function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let age = "Age unknown";

        if (cats[i].age) {
            age = cats[i].age;
        }

        html += `<div>
                    <h5>Name: ${cats[i].name}</h5>
                    <p>Age: ${age}</p>
                </div>`;
    }

    return html

}

const html = createCats(cats)

const catsContainer = document.querySelector(".cat-container")

catsContainer.innerHTML = html