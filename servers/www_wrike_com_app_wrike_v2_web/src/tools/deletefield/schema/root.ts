import { z } from "zod"

export const inputParamsSchema = {
  "databaseId": z.string(),
  "fieldId": z.string()
}