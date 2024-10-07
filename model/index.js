const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:process.env.DIALECT
})

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.')
}).catch((err)=>{
    console.error('Unable to connect to the database:', error)
})

let db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.master=require('./master.model')(sequelize,Sequelize);
db.menu=require('./menu.model')(sequelize,Sequelize);
db.category=require('./category.model')(sequelize,Sequelize);
db.sub_category=require('./sub_category.model')(sequelize,Sequelize);
db.product=require('./product.model')(sequelize,Sequelize);
db.color=require('./color.model')(sequelize,Sequelize);
db.imgcolor=require('./imgcolor')(sequelize,Sequelize);
db.size=require('./size.model')(sequelize,Sequelize);
db.user=require('./user.model')(sequelize,Sequelize);


db.master.hasMany(db.menu,{foreignKey:'master_id'}); db.menu.belongsTo(db.master,{foreignKey: 'master_id'});
db.menu.hasMany(db.category,{foreignKey:'menu_id'}); db.category.belongsTo(db.menu,{foreignKey: 'menu_id'});
db.category.hasMany(db.sub_category,{foreignKey:'cat_id'}); db.sub_category.belongsTo(db.category,{foreignKey: 'cat_id'});
db.sub_category.hasMany(db.product,{foreignKey:'sub_id'}); db.product.belongsTo(db.sub_category,{foreignKey: 'sub_id'});
db.product.hasMany(db.color,{foreignKey:'prod_id'}); db.color.belongsTo(db.product,{foreignKey: 'prod_id'});
db.color.hasMany(db.imgcolor,{foreignKey:'color_id'}); db.imgcolor.belongsTo(db.color,{foreignKey: 'color_id'});
db.product.hasMany(db.imgcolor,{foreignKey:'prod_id'}); db.imgcolor.belongsTo(db.product,{foreignKey: 'prod_id'});
db.product.hasMany(db.size,{foreignKey:'prod_id'}); db.size.belongsTo(db.product,{foreignKey: 'prod_id'});




module.exports=db;




