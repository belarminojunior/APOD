const URL =
  "https://api.nasa.gov/planetary/apod?api_key=d9gYkzMUdlSUtQbl23KFi13MZO6y4AXkxdvqjofl";

let img = document.getElementById("#image");

fetch(URL)
  .then((data) => data.json())
  .then((item) => console.log(item.src));
