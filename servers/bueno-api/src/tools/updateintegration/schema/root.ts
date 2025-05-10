import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Unique identifier of the Integration").optional(),
  "name": z.string().describe("Name of the Integration").optional(),
  "organisationId": z.string().uuid().describe("Unique identifier of the Organisation the Integration belongs to").optional(),
  "timezone": z.string().describe("Timezone of the Integration").optional()
}