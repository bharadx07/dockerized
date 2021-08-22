import express, {Application, Response} from "express"

const app: Application = express();

app.get("/", (_, res: Response) => {
    res.json({message: "Docker is easy! 🐳"})
})

const port: string | number = process.env.PORT ?? 8080

app.listen(port, () => console.log(`Server Running On Port ${port} Successfully.`))