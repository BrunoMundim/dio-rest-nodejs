import { Pool } from "pg";

const connectionString = "postgres://ddcruyfg:VHASepyIVc-ekc24NPk9NDswA-mgV4WU@tuffi.db.elephantsql.com/ddcruyfg";

const db = new Pool({ connectionString });

export default db;
