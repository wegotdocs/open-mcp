import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("Unique, immutable, human readable key to identify the Organisation"),
  "name": z.string().describe("Full name of the Organisation"),
  "timezone": z.string().describe("Timezone of the Organisation")
}