var webp         = require('webp-converter'),
		glob         = require('glob');

glob("./image/**/*.{png,jpg,jpeg,raw}", function (er, files) {
  files.forEach(file => {
  	webp.cwebp(file,file.replace(/\.[^/.]+$/, "")+".webp","-q 90",function(error)
	  {
	  	console.log(error);
	  });
  });
})		
