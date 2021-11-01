//var shouldhave = ['name','address','alias','prospectdate','sale_id']
var shouldhave = [
    'name','email',
    'sales_email',
    'phone_area',
    'phone','address',
    'prospectdate',
    'end_of_contract',
    'business_field','fax_area']
finditem = keys => {
    donthave = []
    shouldhave.forEach(element => {
        if(keys.indexOf(element)<0){
            console.log('Element',element)
            donthave.push(element)
        }
    });
    console.log('Donthave',donthave)
    if(donthave.length>0){
        return {result:false,description:{'dont have':donthave}}
    }else{
        return {result:true,description:'match'}
    }
}
check = params => {
    keys = Object.keys(params)
    found = finditem(keys)
    /*if(keys.length<shouldhave.length){
        return {result:false,description:'Your params less than required params'}
    }else */if(JSON.stringify(keys)===JSON.stringify(shouldhave)){
        return {result:true,description:'ok'}
    }else {
        return finditem(keys)
    }
}
module.exports = {
    check:check,
}