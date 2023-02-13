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
  return data.webPages.value
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
  renderSearches(searches)
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
  const randomSearch = await apiSearch()
  renderSearches([randomSearch[0]])
}

function render() {
  clockHydration();
  $("#search-btn").click(onSearch);
  $("#header").click(toggleBackground);
  $("#feeling-lucky").click(randomLink);
}
