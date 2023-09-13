import Express from "express";
import cors from "cors"
import allUsersRoute from './routes/allUsers_M.js';
import uniqueUserRoute from "./routes/uniqueUser_M.js";
import userCreationRoute from "./routes/userCreation_M.js";

const app = Express();

const port = 8000;

app.use(cors())
app.use(Express.json())

app.use('/api/users', allUsersRoute);
app.use('/api/user', uniqueUserRoute);
app.use('/api/userCreation', userCreationRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});