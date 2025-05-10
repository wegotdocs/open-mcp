import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the sink.").optional(),
  "email": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `email` to the tool, first call the tool `expandSchema` with \"/properties/email\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional configuration for sending an email.</property-description>").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pagerDuty": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pagerDuty` to the tool, first call the tool `expandSchema` with \"/properties/pagerDuty\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional configuration for sending a PagerDuty event.</property-description>").optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "slack": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `slack` to the tool, first call the tool `expandSchema` with \"/properties/slack\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional configuration for sending a Slack message.</property-description>").optional(),
  "splunk": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `splunk` to the tool, first call the tool `expandSchema` with \"/properties/splunk\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional configuration for sending an alert to Splunk.</property-description>").optional(),
  "type": z.enum(["Email","PagerDuty","Slack","Splunk"]).describe("The type of sink."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}