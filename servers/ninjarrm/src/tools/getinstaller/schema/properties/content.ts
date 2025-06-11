import { z } from "zod"

export const inputParamsSchema = {
  "nodeRoleId": z.string().describe("Identifier for the nodeRole target of this installer. Acceptable values include integers, 'auto', or an empty string. If the value is omitted, or an empty string, it defaults to 'auto'.").optional()
}