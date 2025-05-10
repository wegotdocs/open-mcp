import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}