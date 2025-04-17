import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the Integration"),
  "organisationId": z.string().uuid().describe("Unique identifier of the Organisation the Integration belongs to"),
  "timezone": z.string().describe("Timezone of the Integration")
}