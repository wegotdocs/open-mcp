import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Unique identifier of the Organisation"),
  "key": z.string().describe("Unique, immutable, human readable key to identify the Organisation"),
  "name": z.string().describe("Full name of the Organisation"),
  "timezone": z.string().describe("Timezone of the Organisation")
}