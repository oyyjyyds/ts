import express from 'express';

const app = express();

const router = express.Router();

app.use('/api', router);

router.get('/', (req: string, res: any) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
