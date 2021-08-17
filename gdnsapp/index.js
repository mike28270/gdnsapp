const app = require('express')();
const https = require('https');
const port = process.env.PORT || 8080;

var host = 'dns.google';
var url = '';
var response = '';

try {
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
			var json = '';
			var data = '';

	    //another chunk of data has been received, so append it to `str`
	    response.on('data', function (chunk) {
	      str += chunk;
	    });

	    //the whole response has been received, so we just print it out here
	    response.on('end', function () {
	      json = JSON.parse(str);
				console.log('Got response ---->');
				console.log(str+'\n');
				if ('Answer' in json) {
	      	answer = JSON.stringify(json.Answer[0]);
	      	json = JSON.parse(answer);
	      	data = json.data;
				} else {
					data = 'The DNS doesn\'t exist.';
				}
	      console.log('Got result ---->');
	      console.log(data+'\n');
	      console.log('---------------------------');
	      res.status(200).send(data);
	    });
	  }
	  https.request(options, callback).end();
	});
} catch (e) {
	console.log(e);
	res.status(500).send(e);
}

app.listen(port, "0.0.0.0", () => {
    console.log(`Now listening on port ${port}`);
    console.log('---------------------------\n');
});
