

module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('imgcolor',{
         imgcolor_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         color_image:{
            type:Sequelize.STRING(100),
            allowNull:true
         },
         color_id:{
            type:Sequelize.INTEGER,
            allowNull:true
         },
         prod_id:{
            type:Sequelize.INTEGER,
            allowNull:true
         }
         
 
      },{
         freezeTableName: true,
      });
 
      return model;
 }