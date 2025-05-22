import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "caller_id": z.string().nullable().describe("Phone number (e164 formatted) that will be defined as a Caller ID for the target. Use 'blocked' to block the Caller ID.")
}