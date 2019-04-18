import express from 'express';
// Set up the express app
const app = express();

app.get('/api/cookie', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'successfully',
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});