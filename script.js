// JavaScript functions for QueryHaven

// Function to open the query posting modal
function openForm() {
    document.getElementById("post-query-modal").style.display = "flex";
}

// Function to close the query posting modal
function closeForm() {
    document.getElementById("post-query-modal").style.display = "none";
}

// Function to submit a new query
function submitQuery() {
    const title = document.getElementById("query-title").value;
    const description = document.getElementById("query-description").value;

    if (title && description) {
        const queriesContainer = document.getElementById("queries");

        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="button" onclick="alert('Viewing query details...')">View Details</button>
        `;
        
        queriesContainer.appendChild(newCard);
        closeForm();
        alert("Query submitted successfully!");
    } else {
        alert("Please fill out both the title and description.");
    }
}

// Placeholder function for browsing video solutions
function showVideoSolutions() {
    alert("Browsing video solutions...");
}

// Placeholder function for monetizing a query
function monetizeQuery() {
    alert("Learn more about monetizing your query.");
}

// Function to open Query Details Modal
function openQueryDetails(title) {
    document.getElementById('query-title-modal').innerText = title;
    document.getElementById('query-description-modal').innerText = "Detailed description of " + title + " will appear here...";
    
    document.getElementById('query-details-modal').style.display = 'flex';
}

// Function to close Query Details Modal
function closeQueryDetails() {
    document.getElementById('query-details-modal').style.display = 'none';
}

