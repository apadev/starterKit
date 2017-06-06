export default function getBaseUrl(){
	// api url using heroku
	//return getQueryStringParameterByName('useMockApi') ? 'http://localhost:2208//' : 'https://warm-tundra-97460.herokuapp.com/';
	return getQueryStringParameterByName('useMockApi') ? 'http://localhost:2208/' : 'https://warm-tundra-97460.herokuapp.com/';
}

function getQueryStringParameterByName(name, url){
	if(!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	var results = regex.exec(url);
	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
