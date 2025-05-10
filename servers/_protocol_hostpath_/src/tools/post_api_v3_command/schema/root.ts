import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "commandName": z.string().nullable().optional(),
  "message": z.string().nullable().optional(),
  "body": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `body` to the tool, first call the tool `expandSchema` with \"/properties/body\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "priority": z.enum(["normal","high","low"]).optional(),
  "status": z.enum(["queued","started","completed","failed","aborted","cancelled","orphaned"]).optional(),
  "result": z.enum(["unknown","successful","unsuccessful"]).optional(),
  "queued": z.string().datetime({ offset: true }).optional(),
  "started": z.string().datetime({ offset: true }).nullable().optional(),
  "ended": z.string().datetime({ offset: true }).nullable().optional(),
  "duration": z.string().nullable().optional(),
  "exception": z.string().nullable().optional(),
  "trigger": z.enum(["unspecified","manual","scheduled"]).optional(),
  "clientUserAgent": z.string().nullable().optional(),
  "stateChangeTime": z.string().datetime({ offset: true }).nullable().optional(),
  "sendUpdatesToClient": z.boolean().optional(),
  "updateScheduledTask": z.boolean().optional(),
  "lastExecutionTime": z.string().datetime({ offset: true }).nullable().optional()
}