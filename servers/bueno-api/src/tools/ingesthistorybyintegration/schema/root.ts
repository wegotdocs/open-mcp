import { z } from "zod"

export const inputParamsSchema = {
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A map of ISO 8601 formatted local timestamp keys to a list of ingestion History objects. The zone should not be included in the timestamp as it will be taken from the timezone specified in the request or the Integration's default</property-description>"),
  "tz": z.string().describe("An optional timezone database name, when not provided the Integration's default will be used").optional(),
  "source": z.string().describe("An optional custom label that will show up in logs, can be used to debug when there are any issues with messages").optional()
}