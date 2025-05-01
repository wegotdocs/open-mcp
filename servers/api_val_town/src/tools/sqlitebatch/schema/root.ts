import { z } from "zod"

export const inputParamsSchema = {
  "statements": z.array(z.union([z.string().describe("Simple SQL statement to run in SQLite"), z.object({ "sql": z.string().describe("SQL statement, with ? placeholders for arguments"), "args": z.union([z.array(z.any().describe("A value to be used as a parameter")), z.record(z.any().describe("A value to be used as a parameter"))]).describe("List of arguments to be used in the given statement") }).describe("A parameterized SQL query. See https://docs.turso.tech/sdk/ts/reference#batch-transactions for reference")])),
  "mode": z.enum(["write","read","deferred"]).optional()
}