export default function canonize(url){ 

	const domains = 'telegram|vk|vkontakte|twitter|fb|facebook';

	var re = new RegExp('^@?(https?:)?(\/\/)?((' + domains+ ')(\.[a-z]{0,5}))?(\/)?([a-z0-9.]*)', 'i');

	const username = '@' + url.match(re)[7];

	return username;
}