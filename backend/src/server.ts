import express from 'express';

const app = express();

app.get('/', (req: any, res: any) => {
  return res.json({
    message: 'Hallo',
  });
});

app.listen(3000);
