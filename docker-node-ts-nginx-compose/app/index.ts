import express, {Application, Response} from "express"

//Express App With Types
const app: Application = express();

app.get('/', (_, res: Response) => {
    res.send('Hello World!')
  })

app.listen(5000, () => console.log('Server is up and running'));