import dotenv from "dotenv";

dotenv.config();

export const APP_CLIENT_ID = process.env.APP_CLIENT_ID;
export const APP_SECRET = process.env.APP_SECRET;
export const POSITION_TOKEN = process.env.POSITION_TOKEN;
export const SERVER_PORT = process.env.SERVER_PORT;

if (!APP_CLIENT_ID) {
    throw new Error("APP_CLIENT_ID is not defined in enviroment variables.");
}

if (!APP_SECRET) {
    throw new Error("APP_SECRET is not defined in enviroment variables.");
}

if (!POSITION_TOKEN) {
    throw new Error("POSITION_TOKEN is not defined in enviroment variables.");
}

if (!SERVER_PORT) {
    throw new Error("SERVER_PORT is not defined in enviroment variables.");
}
