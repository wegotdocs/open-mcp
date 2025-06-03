import { z } from "zod"

export const inputParamsSchema = {
  "alertRecord": z.string(),
  "groupName": z.string(),
  "instanceId": z.string(),
  "projectId": z.string(),
  "expr": z.string().min(1).max(600).describe("The PromQL expression to evaluate. Every evaluation cycle this is evaluated at the current time, and all resultant time series become pending/firing alerts."),
  "labels": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `labels` to the tool, first call the tool `expandSchema` with \"/properties/labels\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>map of key:value. Labels to add or overwrite for each alert.\n`Additional Validators:`\n* should not contain more than 5 keys\n* each key and value should not be longer than 200 characters\n</property-description>").optional(),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}