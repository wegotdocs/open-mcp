import { z } from "zod"

export const inputParams = {
  "code": z.string().describe("Code snippet to execute. ").optional(),
  "language": z.literal("python").describe("Programming language for the code to execute. Currently only supports Python, but more will be added.").optional(),
  "session_id": z.string().describe("Identifier of the current session. Used to make follow-up calls. Requests will return an error if the session does not belong to the caller or has expired.").optional()
}