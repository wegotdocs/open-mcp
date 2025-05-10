import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "cooldown": z.string().describe("If set, how long until a subsequent alert notification can be raised.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the alert definition.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "message": z.string().describe("The message sent when notifying.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "severity": z.enum(["Critical","Warning","Info"]).describe("The severity of the alert event."),
  "sinks": z.array(z.string()).describe("The sinks used to notify.").optional(),
  "trigger": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `trigger` to the tool, first call the tool `expandSchema` with \"/properties/alertDefinition/properties/trigger\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Represents the criteria to trigger an alert notification.</property-description>").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}