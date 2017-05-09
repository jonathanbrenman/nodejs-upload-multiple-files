module.exports = function(app, routerApi, fs){

	//API Routes comes here
   	routerApi.get('/', function(req, res) {
	    res.json({ message: 'welcome to our api!' });   
	});

	routerApi.get('/list/files', function(req, res) {

		fs.readdir('./uploads', function(err, items) {
			var files = new Array();
		    for (var i=0; i<items.length; i++) {
		        files.push({
		        	'thumb' : '<i class="fa fa-file-video-o" aria-hidden="true"></i>',
		        	'file'  : items[i]
		        });
		    }
	    	res.json(files);   
		});
	});
	
	//GET http://localhost:8080/api
	app.use('/api/v1', routerApi);
}