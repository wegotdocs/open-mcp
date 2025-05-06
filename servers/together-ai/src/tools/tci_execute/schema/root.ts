import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("Code snippet to execute.").optional(),
  "files": z.array(z.object({ "content": z.string(), "encoding": z.enum(["string","base64"]).describe("Encoding of the file content. Use `string` for text files such as code, and `base64` for binary files, such as images."), "name": z.string() })).describe("Files to upload to the session. If present, files will be uploaded before executing the given code.").optional(),
  "language": z.literal("python").describe("Programming language for the code to execute. Currently only supports Python, but more will be added.").optional(),
  "session_id": z.string().describe("Identifier of the current session. Used to make follow-up calls. Requests will return an error if the session does not belong to the caller or has expired.").optional()
}