// Heto po iyong API script para makapag-send si front-end sa mongo atlas para iyong mga data mula sa order.html ay mag-populate sa field ni mongodb 02/22/2026 -Aldo Gardose
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    if (!client) {
      client = new MongoClient(uri);
      await client.connect();
    }

    const db = client.db("ram_rice_db");
    const collection = db.collection("orders");

    const { product, firstName, lastName, mobile, mail } = req.body;

    // Basic validation
    if (!product || !firstName || !lastName || !mobile || !mail) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newOrder = {
      product,
      firstName,
      lastName,
      mobile,
      mail,
      createdAt: new Date()
    };

    await collection.insertOne(newOrder);

    res.status(200).json({ message: "Order saved successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
