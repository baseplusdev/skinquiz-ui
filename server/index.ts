import App from './server';
const app = new App().express;
const port = process.env.PORT||3001;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
});
process.on('uncaughtException', (err) => {
  console.error(`ERROR: ${err.message}`)
})