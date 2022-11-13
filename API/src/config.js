require('dotenv').config();

export default {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER2 || "",
  password: process.env.PASSWORD || "",
}