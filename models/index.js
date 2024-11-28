const sequelize = require("../config/connection");
const comment = require("./commentModel");
const like = require("./likeModel");
const post = require("./postModel");
const user = require("./userModel");

sequelize.sync({ force: false });

user.hasMany(post, { foreignKey: "user_id", as: "post" });
post.belongsTo(user, { foreignKey: "user_id", as: "user" });

post.hasMany(like, { foreignKey: "post_id" });
like.belongsTo(post, { foreignKey: "post_id" });

// user.hasMany(like,{foreignKey:'user_id'})
// like.belongsTo(user,{foreignKey:'user_id'})

post.hasMany(comment, { foreignKey: "post_id" });
comment.belongsTo(post, { foreignKey: "post_id" });

// user.hasMany(comment,{foreignKey:'user_id'})
// comment.belongsTo(user,{foreignKey:'user_id'})

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("unable to connect with this database", error);
}

module.exports = sequelize;
