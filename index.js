var express = require('express'),
	app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, resp) {
	resp.sendfile('./index.html');
});

app.listen(2000, function() {

	console.log('servidor iniciario en el puerto 7000');
});
