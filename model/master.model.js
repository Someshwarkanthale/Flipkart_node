

module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('master',{
         master_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         master_name:{
             type: Sequelize.STRING(100),
             unique:true,
             allowNull:false,
             
         },
         master_description:{
            type:Sequelize.STRING(100),
            allowNull:true
         },
         master_image:{
            type:Sequelize.STRING(255),
            allowNull:true
         }
         
 
      },{
         freezeTableName: true,
      });
 
      return model;
 }