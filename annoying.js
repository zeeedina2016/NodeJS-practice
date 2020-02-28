var http = require('http'), fs = require('fs');


function serveStaticFile(res, path, contentType,responseCode) {
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data) {
        if(err) {
            res.writeHead(500,{ 'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode,
                {'Content-Type': contentType});
            res.end(data);
        }
    });
}

http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serveStaticFile(res, '/lab5/index.html', 'text/html');
            break;
            
        case '/second':
            serveStaticFile(res, '/lab5/second.html', 'text/html');
            break;
        case '/third':
            serveStaticFile(res, '/lab5/third.html', 'text/html');
            break; 
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/pic.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/pic2.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/pic3.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/pic4.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/pic5.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/city.jpg', 'image/jpeg');
            break; 
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/city1.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/city2.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/city3.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/city4.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/food.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/food1.jpg', 'image/jpeg');
            break;
        
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/food2.jpg', 'image/jpeg');
            break;
        case '/img/pic.jpg':
            serveStaticFile(res, '/lab5/img/food3.jpg', 'image/jpeg');
            break;

        default:
                serveStaticFile(res, '/lab5/404page.html','text/html',404);

            break;
    }
}).listen(3000);


console.log('Server started on localhost:3000; press CTRL-C to terminate');