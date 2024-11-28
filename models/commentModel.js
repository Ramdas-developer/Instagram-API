const { DataTypes } = require("sequelize")
const sequelize = require("../config/connection");
const User = require("./userModel");
const post = require("./postModel");

const comment = sequelize.define(
    "Comment",
    { 
      comment_id:{
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
      },
      content:{
       type:DataTypes.STRING,
       allowNull:false,
      },
    },
    {
      tableName:"Comments"
    }
);

// post.hasMany(comment,{foreignKey:'post_id'})
// comment.belongsTo(post,{foreignKey:'post_id'})

console.log("comment :", comment === sequelize.models.Comment); 
module.exports = comment;