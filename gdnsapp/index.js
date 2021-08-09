const app = require('express')();
const https = require('https');
const port = process.env.PORT || 8080;

var host = 'dns.google';
var url = '';
var response = '';

app.get('/:id', (req, res) => {
	const { id } = req.params;

	url = '/resolve?name=' + id + '&type=A';
  console.log('Interpreting DNS{ '+host+url+' } into IP Address.\n');

  //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
  var options = {
      host: host,
      port: '443',
      path: url
  };

  function callback(response) {
    var str = '';

    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      var json = JSON.parse(str);
      var answer = JSON.stringify(json.Answer[0]);
      var json = JSON.parse(answer);
      var data = json.data;
      console.log('Got response ---->');
      console.log(str+'\n');
      console.log('Got result ---->');
      console.log(data+'\n');
      console.log('---------------------------');
      res.status(200).send(data);
    });
  }
  response = https.request(options, callback).end();
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Now listening on port ${port}`);
    console.log('---------------------------\n');
});
