module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('product',{
         prod_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         prod_name:{
             type: Sequelize.STRING(100),
             allowNull:false,
             unique:true
         },
         prod_description:{
            type:Sequelize.STRING(100),
            allowNull:true
         },
         prod_price:{
            type:Sequelize.INTEGER,
            allowNull:false
         },
         prod_discount:{
            type:Sequelize.INTEGER,
            allowNull:true
         },
         prod_image:{
            type:Sequelize.STRING(255),
            allowNull:true
         },
         createdBy:{
            type:Sequelize.STRING(100),
            allowNull:true
         },
         isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true 
          },
         sub_id:{
            type:Sequelize.INTEGER,
            allowNull: true
            
         }
         
 
      },{
         freezeTableName: true,
      });
 
      return model;
 }