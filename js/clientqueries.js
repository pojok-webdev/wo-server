var insertprospect1 = params => {
    console.log('Params',params)
    sql = 'insert into clients '
    sql+= '(name,alias,address,prospectdate,sale_id)'
    sql+= 'values '
    sql+= '("'+params.name+'","'+params.alias+'","'+params.address+'","'+params.prospectdate+'","'+params.sale_id+'")'
    console.log(sql)
    return sql
},
insertProspect = obj => {
    sql = 'insert into clients '
    sql+= '(name,'
    sql+= 'alias,'
    sql+= 'address,'
    sql+= 'city,'
    sql+= 'phone_area,'
    sql+= 'phone,'
    sql+= 'fax_area,'
    sql+= 'fax,'
    sql+= 'has_internet_connection,'
    sql+= 'media,'
    sql+= 'speed,'
    sql+= 'ratio,'
    sql+= 'duration,'
    sql+= 'usage_period, '
    sql+='user_amount, '
    sql+='fee, '
    sql+='operator, '
    sql+='end_of_contract, '
    sql+='problems, '
    sql+='internet_demand, '
    sql+='known_us, '
    sql+='known_from, '
    sql+='interested, '
    sql+='reason2not_interested, '
    sql+='service_id, '
    sql+='service_interested_to, '
    sql+='budget, '
    sql+='implementation_target, '
    sql+='follow_up, '
    sql+='followed_up, '
    sql+='prospect, '
    sql+='prospectdate, '
    sql+='sale_id, '
    sql+='user_id, '
    sql+='status, '
    sql+='active, '
    sql+='hide, '
    sql+='validfb, '
    sql+='fbcomplete, '
    sql+='dataorigin)'
    sql+= 'values '
    sql+= '("'+obj.name+'",'
    sql+= '"'+obj.alias+'",'
    sql+= '"'+obj.address+'",'
    sql+= '"'+obj.city+'",'
    sql+= '"'+obj.phone_area+'",'
    sql+= '"'+obj.phone+'",'
    sql+= '"'+obj.fax_area+'",'
    sql+= '"'+obj.fax+'",'
    sql+= '"'+obj.has_internet_connection+'",'
    sql+= '"'+obj.media+'",'
    sql+= '"'+obj.speed+'",'
    sql+= '"'+obj.ratio+'",'
    sql+= '"'+obj.duration+'",'
    sql+= '"'+obj.usage_period+'",'
    sql+= '"'+obj.user_amount+'",'
    sql+= '"'+obj.fee+'",'
    sql+= '"'+obj.operator+'",'
    sql+= '"'+obj.end_of_contract+'",'
    sql+= '"'+obj.problems+'",'
    sql+= '"'+obj.internet_demand+'",'
    sql+= '"'+obj.known_us+'",'
    sql+= '"'+obj.known_from+'",'
    sql+= '"'+obj.interested+'",'
    sql+= '"'+obj.reason2not_interested+'",'
    sql+= '"'+obj.service_id+'",'
    sql+= '"'+obj.service_interested_to+'",'
    sql+= '"'+obj.budget+'",'
    sql+= '"'+obj.implementation_target+'",'
    sql+= '"'+obj.follow_up+'",'
    sql+= '"'+obj.followed_up+'",'
    sql+= '"1",'//prospect is set to 1
    sql+= '"'+obj.prospectdate+'",'
    sql+= '"'+obj.sale_id+'",'
    sql+= '"'+obj.user_id+'",'
    sql+= '"P",'//status is set to p
    sql+= '"0",'//active is set to 0
    sql+= '"0",'//hide is set to 0
    sql+= '"",'//validfb is set to 0
    sql+= '"0",'//fbcomplete is set to 0
    sql+= '"3")'//dataorigin is set to 3 : inject from crm
    console.log('insertProspect',sql)
    return sql
}
module.exports = {
    insertProspect:insertProspect
}