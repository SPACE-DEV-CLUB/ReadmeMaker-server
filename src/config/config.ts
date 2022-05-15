import dotenv from "dotenv";
dotenv.config();

interface ConfigProps {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
}

const config: ConfigProps = {
  HOST: process.env.MYSQL_HOST || "AWS EndPoint",
  USER: process.env.MYSQL_USER || "User Name",
  PASSWORD: process.env.MYSQL_PASSWORD || "Password",
  DB: process.env.MYSQL_DB || "DB Name",
};

export default config;
