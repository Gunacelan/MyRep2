		var http = require('http');
		var fs = require('fs');
		var url = require('url');
		

		http.createServer(function (req, res) {
			adr = url.parse(req.url, true);
			var query = url.parse(adr, true);
			var search = (query.search).replace('?', '');
			
			switch(search){
				
				case 'Books':   
				res.end(JSON.stringify([{Title: 'Small Molecule Therapy for Genetic Disease', Price: '2,475'}, {Title: 'Contemporary Adulthood',  Price: '2,475'}, {Title: 'Manorama Year Book 2018', Price: '157'}, {Title: 'Black Theology', Price: '2,405'}]));
				break;
				case 'Mobiles' : 
				res.end(JSON.stringify([{Title: 'Zenfone Max Pro M1( 4 GB)', Price: '12,499'}, {Title: 'Honor 10 (6 GB, 128 GB)',  Price: '6,000'}, {Title: 'Asus Zenfone 5Z (6GB / 64GB)', Price: '29,999'}, {Title: 'OPPO A83 2018', Price: '13,990'}]));
				break;
				
				case 'Electronicdevices' : 
				res.end(JSON.stringify([{Title: 'Philips Trimmer', Price: '449'}, {Title: 'Intex Powerbank',  Price: '799'}, {Title: 'Tempered Glass', Price: '99'}, {Title: 'F&D Speakers', Price: '499'}]));
				break;
				
				default :  res.end('No information available in the server.Try for Keywords Books, Mobiles and Electronicdevices');
				break;
				}; 
				
				}).listen(8080);