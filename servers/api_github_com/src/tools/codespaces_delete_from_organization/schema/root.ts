import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "codespace_name": z.string().describe("The name of the codespace.")
}