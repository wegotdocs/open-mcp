import { z } from "zod"

export const inputParams = {
  "file_key": z.string().describe("File to add comments in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."),
  "message": z.string().describe("The text contents of the comment to post."),
  "comment_id": z.string().describe("The ID of the comment to reply to, if any. This must be a root comment. You cannot reply to other replies (a comment that has a parent_id).").optional(),
  "client_meta": z.object({ "x": z.number().describe("X coordinate of the vector."), "y": z.number().describe("Y coordinate of the vector.") }).describe("A 2d vector.").describe("The position where to place the comment.").optional()
}