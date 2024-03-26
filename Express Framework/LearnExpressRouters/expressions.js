const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res) => {
  const quote = getRandomElement(quotes);
  const officialQuote = { quote };
  res.send(officialQuote);
});
//find all quotes & quote by author
app.get('/api/quotes', (req, res) => {
  if (req.query.person !== undefined) {
    const quotedPerson = quotes.filter(quote => quote.person === req.query.person);
    res.send({ quotes: quotedPerson });
  } else {
    res.send({ quotes: quotes });
  }
});
//edit existing quote
app.put('/api/quotes/:id', (req, res) => {
  const quoteId = getElementById(req.param.id, quotes);
  if (quoteId !== -1) {
    updateElement(req.params.id, req.query, quotes);
    res.send(quotes[quoteId]);
  } else {
    res.status(404).send();
  };
})
//create new quote
app.post('/api/quotes', (req, res) => {
  const newQuote = {
    quote: req.query.quote,
    person: req.query.person,
  };
  if (newQuote.quote && newQuote.person) {
    quotes.push(newQuote);
    res.send({ quote: newQuote});
  } else {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
