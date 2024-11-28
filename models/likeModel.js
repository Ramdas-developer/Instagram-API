const { DataTypes } = require("sequelize")
const sequelize = require("../config/connection");
const User = require("./userModel");
const post = require("./postModel");

const like = sequelize.define(
    "Like",
    {  
       like_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
       user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:User,
          key:'user_id',
        }
       },
       post_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:post,
          key:'post_id',
        }
       }
    },
    {
      tableName:"Likes"
    }
);

post.hasMany(like,{foreignKey:'post_id'});
like.belongsTo(post,{foreignKey:'post_id'});


console.log("like :", like === sequelize.models.Like);
module.exports = like;