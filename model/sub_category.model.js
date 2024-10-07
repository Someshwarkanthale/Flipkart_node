module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('sub_category',{
         sub_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         sub_name:{
             type: Sequelize.STRING(100),
             allowNull:false,
             unique:true
         },
         
         cat_id:{
            type:Sequelize.INTEGER,
            allowNull: true
            
         }
         
 
      },{
         freezeTableName: true,
      });
 
      return model;
 }