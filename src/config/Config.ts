import dotenv from "dotenv"
 
dotenv.config()
 
export const PORT: any = process.env["PORT"];
export const HOST: any  = process.env["HOST"];
export const USER: any  = process.env["USER"];
export const PASSWORD: any  = process.env["PASSWORD"];
export const DATABASE: any = process.env["DATABASE"];
export const PORTDB: any = process.env["PORT"];
export const CHARSET: any = process.env["CHARSET"];

