import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "async": z.boolean().describe("When set to `true`, the request will be performed asynchronously. Returns a 202 status code when the job is successfully queued.").optional()
}