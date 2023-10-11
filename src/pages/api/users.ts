import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import type { NextApiRequest, NextApiResponse } from "next";


// Define the GET request handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  // open the database
  let db = await open({
    filename: "./database.db", // Specify the database file path
    driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
  });

  // Perform a database query to retrieve all items from the "items" table
  const items = await db.all("SELECT * FROM Users");

  // Return the items as a JSON response with status 200
  res.status(200).json(items);

  db.close();
}
