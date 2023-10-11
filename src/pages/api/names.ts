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
  const users = await db.all("SELECT * FROM Users");
  const names = await db.all("SELECT * FROM Names");
  const permissions = await db.all("SELECT * FROM permissions")
  users.forEach((user) => {
    Object.assign(user, names[user.id-1]);
    if (user.role === "admin") {
      Object.assign(user, permissions[0]);
    } else if (user.role === "mod") {
      Object.assign(user, permissions[1]);
    } else if (user.role === "user") {
      Object.assign(user, permissions[2]);
    }
  });

  // Return the items as a JSON response with status 200
  res.status(200).json(users);

  db.close();
}
