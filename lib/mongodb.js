import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!uri) {
  clientPromise = null;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getDb() {
  if (!clientPromise) {
    return null;
  }

  const connectedClient = await clientPromise;
  return connectedClient.db(process.env.MONGODB_DB || "stylesquare");
}
