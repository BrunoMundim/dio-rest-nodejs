import { Pool } from "pg";

const connectionString = "postgres://xxxxx:xxxxx.db.elephantsql.com/ddcruyfg";

const db = new Pool({ connectionString });

export default db;
