import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "itemId": z.string().describe("The object id of the inbox item.")
}