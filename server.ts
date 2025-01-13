import { app, sendContent } from "nexujs";

app.get('/', (req, res) => {
   res.send(sendContent); 
});