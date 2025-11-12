import express from "express";
import routes from "../routes/routes";

const app = express();

app.use(express.json());

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default app;