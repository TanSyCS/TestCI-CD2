const mongoose=require('mongoose');
const search_history=mongoose.Schema({
    userId:String,
    dname:String,
})
module.exports=mongoose.model("search_histories",search_history);