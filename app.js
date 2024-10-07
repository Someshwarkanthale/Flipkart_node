var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const db = require("./model/index");
var indexRouter = require("./routes/index");
const userRouter = require("./routes/user.routes");
const masterRouter = require("./routes/master.routes");
const menuRouter = require("./routes/menu.routes");
const categoryRouter = require("./routes/category.routes");
const sub_categoryRouter = require("./routes/sub_category.routes");
const productRouter = require("./routes/product.routes");
const imgcolorRouter = require("./routes/imgcolor.routes");
const sizeRouter = require("./routes/size.routes");
const authRouter = require("./routes/auth.routes");
const middleware = require('./middleware/jwt.middleware')
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// db.sequelize.sync({force:false}); // if you want drop and recreate all tables
db.sequelize.sync({});

app.use("/", indexRouter);
app.use("/user", middleware.checkToken, userRouter);
app.use("/master", masterRouter);
app.use("/menu", menuRouter);
app.use("/category", categoryRouter);
app.use("/sub_category", sub_categoryRouter);
app.use("/product", productRouter);
app.use("/imgcolor", imgcolorRouter);
app.use("/size", sizeRouter);
app.use("/auth", authRouter);
module.exports = app;
