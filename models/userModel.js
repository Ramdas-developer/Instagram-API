const { DataTypes} = require("sequelize");
const sequelize = require("../config/connection");


const User = sequelize.define(
    "User",
    {     user_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
          },
          userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
          },
          email: {
            type: DataTypes.STRING, 
            allowNull:false,
            unique:true,
          },
          phone:{
              type:DataTypes.STRING,
              allowNull : false,

          },
          password:{
              type:DataTypes.STRING,
              allowNull: false,
          }
    },
    {
        tableName:"users",
    }
);


console.log("user :",User === sequelize.models.User)
module.exports = User;














// schema.pre("save", async function (next) {
//     if (this.isModified().isNew("password")) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });