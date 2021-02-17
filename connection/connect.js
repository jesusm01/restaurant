import mongoose from "mongoose";
///CAMBIAR LA IP DE MONGO
mongoose.connect("mongodb://172.19.0.2:27017/restorant", {
  useNewUrlParser: true,
});
var db = mongoose.connection;
db.on("error", () => {
  console.log("No se puede conectar con la base de datos");
});
db.on("open", () => {
  console.log("Conexion exitosa");
});
export default mongoose;
