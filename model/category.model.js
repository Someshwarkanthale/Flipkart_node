module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('category',{
         cat_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         cat_name:{
             type: Sequelize.STRING(100),
             allowNull:false,
             unique:true
         },
         
         menu_id:{
            type:Sequelize.INTEGER,
            allowNull: true
            
         }
         
 
      },{
         freezeTableName: true,
      });
 
      return model;
 }