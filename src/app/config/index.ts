
import dotenv from "dotenv"
import path from "path"



dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    DEFAULT_PASS: process.env.DEFAULT_PASSWORD
};
