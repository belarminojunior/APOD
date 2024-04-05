const URL =
  "https://api.nasa.gov/planetary/apod?api_key=d9gYkzMUdlSUtQbl23KFi13MZO6y4AXkxdvqjofl";

const notFound = document.querySelector(".not-found");
const notFoundMessage = document.querySelector(".not-found h1");
const content = document.getElementById("content");

const date = document.getElementById("date");
const pictureTitle = document.getElementById("picture-title");
const picture = document.getElementById("picture-day");
const explanation = document.getElementById("explanation");
const copyright = document.getElementById("copyright");
const hd = document.getElementById("hd");

fetch(URL)
  .then((data) => data.json())
  .then((data) => feedData(data))
  .catch(() => showNotFound());

function feedData(data) {
  if (data.media_type !== "image") {
    showNotFound();
    return;
  }

  date.innerText = getLongDate(data.date);
  pictureTitle.innerText = data.title;
  picture.src = data.url;
  explanation.innerText = data.explanation;
  copyright.innerText = data.copyright;
  hd.href = data.hdurl;

  content.classList.remove("hidden");
  notFound.classList.add("hidden");

  if (!data.hdurl) hd.classList.add("hidden");
}

function showNotFound() {
  notFoundMessage.innerText = "Ops... Nothing For Today";
  notFound.classList.remove("hidden");
  content.classList.add("hidden");
}

function getLongDate(isoDate) {
  const date = new Date(isoDate);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
