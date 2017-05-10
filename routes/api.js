module.exports = function(app, routerApi, fs){

	//API Routes comes here
   	routerApi.get('/', function(req, res) {
	    res.json({ message: 'welcome to our api!' });   
	});

	routerApi.get('/list/files', function(req, res) {
		fs.readdir('./uploads', function(err, items) {
			var files = new Array();
		    for (var i=0; i<items.length; i++) {
		    	var relative_path = __dirname + '/../uploads/'+ items[i];
		    	var file_stat 	  = fs.statSync(relative_path);
		    	var created_at    = new Date(file_stat.ctime);
		    	created_at        = ("0" + created_at.getDate()).slice(-2)+'-'+("0" + (created_at.getMonth() + 1)).slice(-2)+'-'+created_at.getFullYear();
		    	var size          = (file_stat.size / 1000000.0).toFixed(2);
		    	size 			  = size + 'MB';
		        
		        files.push({
		        	'thumb' 	 : '<i class="fa fa-file-video-o" aria-hidden="true"></i>',
		        	'file'  	 : items[i],
		        	'created_at' : created_at,
		        	'size'       : size
		        });
		    }
	    	res.json(files);   
		});
	});
	
	app.use('/api/v1', routerApi);
}