

module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('color',{
         color_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         color_name:{
             type: Sequelize.STRING(100),
             unique:true,
             allowNull:false,
         },
         color_image:{
            type:Sequelize.STRING(100),
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