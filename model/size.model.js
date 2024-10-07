module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('size',{
         size_id:{
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
         sizes:{
             type: Sequelize.STRING(10000),
             allowNull:false,
             
         },
        
         prod_id:{
            type:Sequelize.INTEGER,
            allowNull: true
            
         }
         
 
      },{
         freezeTableName: true,
      });
 
      return model;
 }