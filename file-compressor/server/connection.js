import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
console.log(uri)
const client = new MongoClient("mongodb+srv://mk2246:Vidyakrishaksh1991@cluster0.edgcizs.mongodb.net/?retryWrites=true&w=majority", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

async function connectToDatabase() {
try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("cluster0").command({ ping: 1 });
  console.log(
    "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}
}
let db = client.db("cluster0");

export { connectToDatabase, db};