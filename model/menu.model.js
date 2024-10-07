module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('menu',{
         menu_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         menu_name:{
             type: Sequelize.STRING(100),
             allowNull:false,
             unique:true
         },
         
         master_id:{
            type:Sequelize.INTEGER,
            allowNull: true
            
         }
         
 
      },{
         freezeTableName: true,
      });
 
      return model;
 }