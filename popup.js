document.getElementById("getQuote").addEventListener("click", getQuote);

function getQuote() {
  let quote;
  let api = "https://type.fit/api/quotes";
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const quoteNumber = Math.floor(Math.random() * data.length);
      quote = data[quoteNumber];
      document.getElementById("text").innerHTML = `
        <div class="text">${quote.text}</div>
        <div class="author">${quote.author}</div>`;
    });
}

(getQuote())()
