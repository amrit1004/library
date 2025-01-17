import config from "@/lib/config";
import { drizzle } from "drizzle-orm/neon-http";
import { Client, neon } from "@neondatabase/serverless";

const sql = neon(config.env.databaseUrl);

export const db = drizzle({ client:sql });