import express from 'express';
// Set up the express app
const app = express();

var port = process.env.PORT || 3000;

app.get('/api/cookie', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'successfully',
  })
});

app.listen(port, () => {
  console.log(`server running on port ${PORT}`)
});