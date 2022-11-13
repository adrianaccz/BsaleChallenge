import { config } from "dotenv"

config()

export default {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user2: process.env.USER || "",
  password: process.env.PASSWORD || "",
}