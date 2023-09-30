import Express from "express";
import cors from "cors"
import allUsersRoute from './routes/allUsers_M.js';
import uniqueUserRoute from "./routes/uniqueUser_M.js";
import userCreationRoute from "./routes/userCreation_M.js";
import colocCreationRoute from "./routes/colocCreation_M.js";
import uniqueColocRoute from "./routes/uniqueColoc_M.js";

const app = Express();

const port = 8000;

app.use(cors())
app.use(Express.json())

app.use('/api/users', allUsersRoute);
app.use('/api/user', uniqueUserRoute);
app.use('/api/userCreation', userCreationRoute);
app.use('/api/coloc', colocCreationRoute)
app.use('/api/coloc', uniqueColocRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});