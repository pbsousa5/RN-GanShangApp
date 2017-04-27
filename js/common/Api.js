
const serviceIP = 'http://127.0.0.1:8000';

module.exports = {

    //服务器地址
    servicePath  : serviceIP,

    //图片服务器地址
    imagePath    : serviceIP + '/upload/',

	//分类列表
    category_list: serviceIP + '/api/v1/product/categorys/',

    //对应分类产品列表
    product_list: serviceIP + '/api/v1/product/list_product/?',

    GET_Method:(url, succCallBack, failCallBack)=>{
    	return fetch(url).then((response)=>response.text())
    			.then((text)=>succCallBack(JSON.parse(text)))
    			.catch((error)=>failCallBack(error));
    }
}