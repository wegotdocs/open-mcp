import { z } from "zod"

export const inputParamsSchema = {
  "credentialTypeName": z.string().describe("The credential type name that you want to get the schema for")
}