import { z } from "zod"

export const inputParamsSchema = {
  "sendById": z.string(),
  "text": z.string(),
  "type": z.enum(["TALK","LABORAL_FLOW","SERVICE_REQUEST","SERVICE_OPPORTUNITY"]),
  "hash": z.string().optional(),
  "silentPush": z.boolean().optional(),
  "extraInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extraInfo` to the tool, first call the tool `expandSchema` with \"/properties/extraInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "userIds": z.array(z.string())
}