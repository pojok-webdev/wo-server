var express = require('express'),
    app = express(),
    connection = require('./js/connection'),
    clientqueries = require('./js/clientqueries'),
    bodyParser = require('body-parser'),
    appconfig = require('./js/configs'),
    appSetting = appconfig.appSetting(),
    checkparams = require('./js/checks.js');
    app.engine('html',require('ejs').renderFile)
    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
insertProspect = (obj,callback)=>{
  connection.doQuery(clientqueries.insertProspect(obj),result=>{
    console.log('Result',result)
      callback(result)
  })
}
app.post('/insertprospect',(req,res,next)=>{
    check = checkparams.check(req.body)
    if(check.result){
        connection.doQuery(clientqueries.insertProspect(req.body),result=>{
            res.send(result)
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.listen(process.env.PORT||appSetting.port)
