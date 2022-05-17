var http = require('http');
var formidable = require('formidable');

// Create an HTML form, with an upload field:
http.createServer(function (req, res) {
    // parse the uploaded file
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) { // files -> path to temporary folder
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/nivemadh/Documents/Intern Project/Learn Node.js' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
    }).listen(8080);