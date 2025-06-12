import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "itemId": z.string().describe("The object id of the inbox item."),
  "index": z.string().describe("The index of the package in the workflow task packages.")
}