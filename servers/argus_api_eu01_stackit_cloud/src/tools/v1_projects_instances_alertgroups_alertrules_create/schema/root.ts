import { z } from "zod"

export const inputParamsSchema = {
  "groupName": z.string(),
  "instanceId": z.string(),
  "projectId": z.string(),
  "alert": z.string().min(1).max(200).describe("The name of the alert.\n`Additional Validators:`\n* is the identifier and so unique in the group\n* should only include the characters: a-zA-Z0-9-"),
  "annotations": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `annotations` to the tool, first call the tool `expandSchema` with \"/properties/annotations\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>map of key:value. Annotations to add to each alert.\n`Additional Validators:`\n* should not contain more than 5 keys\n* each key and value should not be longer than 200 characters</property-description>").optional(),
  "expr": z.string().min(1).max(600).describe("The PromQL expression to evaluate. Every evaluation cycle this is evaluated at the current time, and all resultant time series become pending/firing alerts."),
  "for": z.string().min(2).max(8).describe("Alerts are considered firing once they have been returned for this long. Alerts which have not yet fired for long enough are considered pending.\n`Additional Validators:`\n* must be a valid time string").optional(),
  "labels": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `labels` to the tool, first call the tool `expandSchema` with \"/properties/labels\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>map of key:value. Labels to add or overwrite for each alert.\n`Additional Validators:`\n* should not contain more than 10 keys\n* each key and value should not be longer than 200 characters</property-description>").optional(),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}