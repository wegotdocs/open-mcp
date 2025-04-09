import { z } from "zod";
export const inputParams = {
    "file_key": z.string().describe("File to get image URLs from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.")
};
