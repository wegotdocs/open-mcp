import { z } from "zod";
export const inputParams = {
    "file_key": z.string().describe("File to get comment containing reactions from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."),
    "comment_id": z.string().describe("ID of comment to get reactions from."),
    "cursor": z.string().describe("Cursor for pagination, retrieved from the response of the previous call.").optional()
};
