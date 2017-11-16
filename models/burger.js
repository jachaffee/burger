var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback){
        orm.selectAll('burgers',function(returnData){
            callback(returnData);
        });
    },
    insertOne: function(column,name,callback){
        orm.insertOne('burgers',column,name, function(returnData){
            callback(returnData);
        });
    },
    
    updateOne: function(table,column,id,callback){
        orm.updateOne('burgers',column, id,function(returnData){
            callback(returnData);
        })
    }
}


module.exports = burger;