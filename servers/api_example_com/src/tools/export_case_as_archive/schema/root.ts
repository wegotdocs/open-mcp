import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "password": z.string().describe("A password to encrypt the file. Needs to be provided when importing the file")
}