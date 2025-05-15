import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The object’s conceptual ID, which is synthesized from the process and Runtime IDs."),
  "Retry": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Retry` to the tool, first call the tool `expandSchema` with \"/properties/Retry\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "Schedule": z.array(z.object({ "daysOfMonth": z.string().describe("1 is the first day of the month and 31 is the last day of the month.").optional(), "daysOfWeek": z.string().describe("1 is Sunday and 7 is Saturday.").optional(), "hours": z.string().describe("Uses a 24-hour clock. 0 is midnight and 12 is noon.").optional(), "minutes": z.string().describe("0 is the first minute of the hour — for example, 1:00 A.M.59 is the last minute of the hour — for example, 1:59 A.M.").optional(), "months": z.string().describe("1 is January and 12 is December. In most cases this is set to an asterisk [*].").optional(), "years": z.string().describe("The standard year format. In most cases this is set to an asterisk [*].").optional() })).optional(),
  "atomId": z.string().describe("A unique ID assigned by the system to the Runtime.").optional(),
  "b_id": z.string().describe("The object’s conceptual ID, which is synthesized from the process and Runtime IDs.").optional(),
  "processId": z.string().describe("A unique ID assigned by the system to the process. Must not be a listener process.").optional()
}