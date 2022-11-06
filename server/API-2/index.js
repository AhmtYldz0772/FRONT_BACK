const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/database.js");
const authRoutes = require("./routes/auth.js");
// const commentRoutes = require("./routes/comments.js");
// const likesRoutes = require("./routes/likes.js");
// const postsRoutes = require("./routes/posts.js");
// const usersRoutes = require("./routes/users.js");
//import cookieParser from "cookie-parser"
dotenv.config();
//middleware
//app.use(express.json())
app.use(cors())
//app.use(cookieParser)

app.use(express.json({ limit: "30mb", extended: true })); //fronttan gelen verilerin sıkıntı çıkarmaması için alınan önlem
app.use(express.urlencoded({ limit: "30mb", extended: true })); //fronttan gelen verilerin sıkıntı çıkarmaması için alınan önlem
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("server is running on port : 5001");
});
db();

app.use("/api/users",authRoutes)
// app.use("/api/comments",commentRoutes)
// app.use("/api/likes",likesRoutes)
// app.use("/api/posts",postsRoutes)
// app.use("/api/users",usersRoutes)


