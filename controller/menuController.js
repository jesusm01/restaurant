import MenuModel from "../models/MenuModel.js";
class MenuController{
    constructor(){}
    //services
    async createMenu (request,response){
        var data = request.body;
        var menu = new MenuModel();
        var result = await menu.createMenu(
            data.name,
            data.price,
            data.description,
            data.registerDate
        );
        response.status(200).json(result);
    }
}
export default MenuController;