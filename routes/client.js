module.exports = function(app, router, formidable, fs){

	//Here comes frontend pages
	router.get('/', function(req, res) {
	    res.sendFile('welcome.html', { root: 'views/' });
	});

	router.post('/fileupload', function(req, res) {
		var form = new formidable.IncomingForm();

    	form.parse(req);

		form.on('fileBegin', function (name, file){
		    file.path = 'uploads/' + file.name;
		});
		form.on('file', function (name, file){
    		res.sendFile('success.html', { root: 'views/' });
		});
	    
	});
	app.use('/', router);
}