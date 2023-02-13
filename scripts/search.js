function formatSearchItems(items) {
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""
    items.forEach((i) => {
        let container = document.createElement("div")
        container.className = "search-container"

        let header = document.createElement("h3")
        header.className = "search-header"
        header.innerText = i.name
        container.appendChild(header)

        let url = document.createElement("a")
        url.className = "search-link"
        url.href = i.displayUrl
        url.target = "_blank"
        url.innerText = i.displayUrl
        container.appendChild(url)

        let body = document.createElement("p")
        body.className = "search-body"
        body.innerText = i.snippet
        container.appendChild(body)
        
        searchResultsContainer.appendChild(container)
    })
}