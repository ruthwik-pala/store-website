import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { products } from "@/lib/products";

export async function GET() {
  const db = await getDb();

  if (!db) {
    return NextResponse.json({ source: "seed", products });
  }

  const collection = db.collection("products");
  const dbProducts = await collection.find({}).toArray();

  return NextResponse.json({ source: "mongodb", products: dbProducts });
}
