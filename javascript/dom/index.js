const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!"
container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm Red."
container.appendChild(redParagraph);


const blueParagraph = document.createElement("h3");
blueParagraph.style.color = "blue";
blueParagraph.textContent = "I'm blue h3!";
container.appendChild(blueParagraph)

const divList = document.createElement("div");
divList.setAttribute("style", "border:1px solid black; background: pink");
const intro = document.createElement("h1");
intro.textContent = "I'm in a div";
const para = document.createElement("p");
para.textContent = "ME TOO!";
container.appendChild(intro);
container.appendChild(para);
container.appendChild(divList)


