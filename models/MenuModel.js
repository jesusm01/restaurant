import mongoose from "../connection/connect.js";
class menuModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.MenuSchema = new this.Schema({
            name: String,
            price: Number,
            description: String,
            registerDate:Date,
        });
        this.mymodel = mongoose.model("menu",this.MenuSchema);
    }

    createMenu(name,price,description,registerDate){
        var menu = {
            name,
            price,
            description,
            registerDate
        };
        var newMenu = new this.mymodel(menu);
        return new Promise((resolve,reject)=>{
            newMenu.save().then((err,docs)=>{
                console.log("menu register successful");
                resolve(docs);
            });
        });
    }

    getMenu(){
        return new Promise((resolve,reject)=>{
            this.mymodel.find({}, (err,docs)=>{
                if (err) {
                    console.log (err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    updateModel(id, menuUpdate){
        return new Promise((resolve,reject)=>{
            this.mymodel.update({ _id:id},{$set: menuUpdate},(err,docs) => {
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
       
    }

    deleteMenu(id) {
        return new Promise((resolve, reject) => {
          this.mymodel.remove({ _id: id }).then((err, docs) => {
            if (err) {
              console.log(err);
              resolve(err);
              return;
            }
            resolve(docs);
          });
        });
      }

    getModel(){
        return this.mymodel
    }
}
export default menuModel;