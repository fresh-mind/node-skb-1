import express from 'express';
import canonize from './canonize';

const app = express();

app.get('/', (req, res) => {
  
	const username = canonize( req.query.url );
	res.json({
		url: req.query.url,
		username,
	});

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


/*const arrUrl = [
	'https://vk.com/igor.suvorov',
	'https://twitter.com/suvorovigor',
	'https://telegram.me/skillbranch',
	'https://Telegram.me/skillbranch',
	'@skillbranch',
	'https://vk.com/skillbranch?w=wall-117903599_1076',
	'http://vk.com/skillbranch/profile',
	'skillbranch',
];

arrUrl.forEach( (url) => {

	const username = canonize(url);
	console.log(username);

});
*/