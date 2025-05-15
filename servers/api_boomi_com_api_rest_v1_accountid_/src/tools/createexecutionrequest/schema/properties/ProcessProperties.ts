import { z } from "zod"

export const inputParamsSchema = {
  "ProcessProperty": z.array(z.object({ "ProcessPropertyValue": z.array(z.object({ "componentOverride": z.boolean().optional(), "encryptedValueSet": z.boolean().optional(), "key": z.string().optional(), "label": z.string().optional(), "useDefault": z.boolean().optional(), "usesEncryption": z.boolean().optional(), "validate": z.boolean().optional(), "value": z.string().describe("The value assigned to the persisted process property.").optional() })).optional(), "componentId": z.string().optional() })).optional()
}