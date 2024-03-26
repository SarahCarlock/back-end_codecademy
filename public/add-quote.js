const submitButton = document.getElementById('submit-quote');
const newQuoteContainer = document.getElementById('new-quote');
const createElement = document.getElementById('id');

submitButton.addEventListener('click', () => {
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;
  const id = document.getElementById('idPlacement');

  fetch(`/api/quotes?quote=${quote}&person=${person}`, {
    method: 'POST',
  })
  .then(response => response.json())
  .then(({quote}) => {
    const newQuote = document.createElement('div');
    newQuote.innerHTML = `
    <h3>Congrats, your quote was added!</h3>
    <div class="quote-text">${quote.quote}</div>
    <div class="attribution">- ${quote.person}</div>
    <p class="id">${quote.id}</p>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
    newQuoteContainer.appendChild(newQuote);
  });
});
