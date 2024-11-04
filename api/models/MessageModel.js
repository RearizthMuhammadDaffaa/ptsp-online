import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes} = Sequelize;

const Message = db.define('message',{
  chatId: {
    type: DataTypes.STRING,
    allowNull: false, // Unique ID for each chat session
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiver: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
},{
  freezeTableName:true
}
);





export default Message;

// (async()=>{
//   await db.sync();
// })()
