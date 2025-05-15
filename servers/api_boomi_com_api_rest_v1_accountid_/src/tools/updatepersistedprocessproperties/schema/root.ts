import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique ID assigned by the system to the Runtime."),
  "Process": z.array(z.object({ "ProcessProperties": z.object({ "ProcessProperty": z.array(z.object({ "ProcessPropertyValue": z.array(z.object({ "componentOverride": z.boolean().optional(), "encryptedValueSet": z.boolean().optional(), "key": z.string().optional(), "label": z.string().optional(), "useDefault": z.boolean().optional(), "usesEncryption": z.boolean().optional(), "validate": z.boolean().optional(), "value": z.string().describe("The value assigned to the persisted process property.").optional() })).optional(), "componentId": z.string().optional() })).optional() }).describe("The complete list of Persisted Process properties within the specified Runtime, Runtime cluster, or cloud, where the definition of each property is by its name and value."), "processId": z.string().describe("A unique ID assigned by the system to the process.") })).optional(),
  "atomId": z.string().describe("A unique ID assigned by the system to the Runtime.")
}