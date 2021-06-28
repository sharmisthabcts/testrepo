var express = require('express');
var Twitter = require('twitter');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);   
})

app.listen(3000, function () {  
  console.log('Tweet app listening on port 3000!');
});


var client = new Twitter({
  consumer_key: 'iDXvHxqGUOwdnWto6iaBlkLCV',
  consumer_secret: 'TmYjN2scnpSXbzbkiNp9mYuOwY5L3ee1dRUqRLV8vluDhnatu5',
  access_token_key: '1173935109554110464-tuKmkaIt0zbxc2xXOOiXTSD8EpKNg3',
  access_token_secret: 'dGZpucMilfEoXzbj2VhGdRDqIyh5csSfllG2Q5IMG5aNT'
});

app.get('/tweets', (req, res) => {
    var query = req.url.match(/[^=]+$/)[0];
    client.get('search/tweets', {q: query,count:100}, function(error, tweets, response) {
        var status = tweets.statuses;
        res.end(JSON.stringify(status));   
    });
  });

  