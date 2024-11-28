const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./userModel");

const post = sequelize.define(
    "post",
    {  
        post_id:{
             type:DataTypes.INTEGER,
             allowNull:false,
             autoIncrement:true,
             primaryKey:true, 
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:User,
                key:'user_id',
            }
        },
        title : {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {  
       timestamps:true,
       tableName:"Posts"
    }
);

post.belongsTo(User,{foreignKey:"user_id"})
User.hasMany(post,{foreignKey:"user_id"})

console.log("post :",post === sequelize.models.post)

module.exports = post;
