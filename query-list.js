const queries = [
    { title: "What is Async Await in JavaScript?", description: "Understanding async and await..." },
    { title: "How does CSS Flexbox work?", description: "A guide to mastering Flexbox layout..." },
    { title: "Best practices for React Hooks?", description: "Tips and tricks for effective use of Hooks." }
];

// Function to load queries
function loadQueries() {
    const queryListContainer = document.getElementById("query-list");

    queries.forEach(query => {
        const queryCard = document.createElement("div");
        queryCard.className = "card";
        queryCard.innerHTML = `
            <h3>${query.title}</h3>
            <p>${query.description}</p>
            <a href="query-detail.html?title=${encodeURIComponent(query.title)}" class="button">View Details</a>
        `;
        queryListContainer.appendChild(queryCard);
    });
}
