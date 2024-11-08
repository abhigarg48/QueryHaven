// JavaScript to dynamically load details of a specific query

// Function to get query details from URL parameters
function getQueryDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");

    const queryDetailContainer = document.getElementById("query-detail");
    queryDetailContainer.innerHTML = `
        <h2>${title}</h2>
        <p>This is a detailed description of the query "${title}".</p>
        <button class="button" onclick="alert('Adding comment...')">Add Comment</button>
    `;
}

// Load the query detail on page load
window.onload = getQueryDetail;
