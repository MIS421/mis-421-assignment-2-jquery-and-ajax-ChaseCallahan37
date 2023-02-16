var len;
var results = "";

async function apiSearch(searchInput = "") {
  var params = {
    q: searchInput,
    count: "50",
    offset: "0",
    mkt: "en-us",
  };
  const data = await $.ajax({
    url: "https://api.bing.microsoft.com/v7.0/search?" + $.param(params),
    beforeSend: function (xhrObj) {
      xhrObj.setRequestHeader(
        "Ocp-Apim-Subscription-Key",
        "54344b7a180c491bb6a078ef31bb20ef"
      );
    },
    type: "GET",
  })
    .done((data) => data)
    .fail(function (e) {
      alert("error");
    });
  return data.webPages.value;
}

function renderSearches(items) {
  formatSearchItems(items);
  $("#searchResults").css("visibility", "visible");
  $("#searchResults").dialog({
    width: window.innerWidth * 0.85,
    modal: true,
    resizable: true,
    dialogClass: "success-dialog",
  });
}

// function bingSearch() {
//   const query = "walmart";
//   const url = `https://api.bing.microsoft.com/v7.0/search?q=${query}&mkt=en-US&count=3`;
//   const option = {
//     mode: "cors",
//     headers: {
//       "Ocp-Apim-Subscription-Key": "54344b7a180c491bb6a078ef31bb20ef",
//     },
//   };

//   fetch(url, option)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log("err: " + err));
// }

async function onSearch() {
  const searches = await apiSearch($("#query").val());
  renderSearches(searches);
}

mountainBackground = true;
header = document.getElementById("header");
body = document.getElementById("body");

mountainImg = "mountain-skyline.jpg";
skyImg = "purple-mountain.jpg";

function toggleBackground(e) {
  mountainBackground = !mountainBackground;
  $("#body").css(
    "background-image",
    `url(./images/${mountainBackground ? mountainImg : skyImg})`
  );
}

async function randomLink() {
  const randomSearch = await apiSearch();
  renderSearches([randomSearch[0]]);
}

function render() {
  clockHydration();
  $("#search-btn").click(onSearch);
  $("#header").click(toggleBackground);
  $("#feeling-lucky").click(randomLink);
}

// Time function, finds element with clock and updates to current time

//Sets inner text of button to current time
function showTime() {
  // $("#time").dialog(generateTimeFormat());
  const time = $("#time");
  time.css("visibility", "visible");
  time.text(generateTimeFormat());
  time.dialog({
    dialogClass: "no-close",
    buttons: [
      {
        text: "OK",
        click: function () {
          $(this).dialog("close");
          this.css("visibility", "hidden");
        },
      },
    ],
    title: "Current Time",
  });
}

function generateTimeFormat() {
  now = new Date();
  return now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

function clockHydration() {
  $("#clock-btn").click(() => {
    showTime();
  });
}

function formatSearchItems(items) {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";
  items.forEach((i) => {
    let container = document.createElement("div");
    container.className = "search-container";

    let header = document.createElement("h3");
    header.className = "search-header";
    header.innerText = i.name;
    container.appendChild(header);

    let url = document.createElement("a");
    url.className = "search-link";
    url.href = i.displayUrl;
    url.target = "_blank";
    url.innerText = i.displayUrl;
    container.appendChild(url);

    let body = document.createElement("p");
    body.className = "search-body";
    body.innerText = i.snippet;
    container.appendChild(body);

    searchResultsContainer.appendChild(container);
  });
}