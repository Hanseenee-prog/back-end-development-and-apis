import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, 'accounts.json')

const getAccounts = async () => {
    const data = await readFile(DB_PATH);
    return JSON.parse(data);
}

const saveAccounts = async (accounts) => {
    await writeFile(DB_PATH, JSON.stringify(accounts, null, 2))
}

export { getAccounts, saveAccounts }