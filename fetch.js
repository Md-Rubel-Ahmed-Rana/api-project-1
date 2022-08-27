
const displayData = (data) => {
    const postContainer = document.getElementById("post-container");
    for (const user of data) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <h2>UserID: ${user.id}</h2>
            <h4>Title: ${user.title}</h4>
            <p> ${user.body} </p>
        `;
        postContainer.appendChild(postDiv)
    }
} 

const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
        .then(data => displayData(data))
}

loadData()