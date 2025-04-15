import { z } from "zod"

export const inputParamsSchema = {
  "notificationId": z.string().describe("Id of notification"),
  "type": z.enum(["CONSENT_REVOKED","CONSENT_UPDATED","CUSTOM","SERVICE","BALANCE","PLANNED_OUTAGE"]).describe("Type of Notification"),
  "sentOn": z.string().datetime({ offset: true }).describe("ISO 8601 date-time in format 'YYYY-MM-DDThh:mm:ss.nnn[Z|[+|-]hh:mm]' according to [IETF RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)"),
  "category": z.enum(["SECURITY","MAINTENANCE","FRAUD","CONSENT","NEW_DATA"]).describe("Category of Notification"),
  "severity": z.enum(["EMERGENCY","ALERT","WARNING","NOTICE","INFO"]).describe("Severity level of notification").optional(),
  "priority": z.enum(["HIGH","MEDIUM","LOW"]).describe("Priority of notification").optional(),
  "publisher": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `publisher` to the tool, first call the tool `expandSchema` with \"/properties/publisher\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>FDX Participant - an entity or person that is a part of a FDX API transaction</property-description>").optional(),
  "subscriber": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `subscriber` to the tool, first call the tool `expandSchema` with \"/properties/subscriber\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>FDX Participant - an entity or person that is a part of a FDX API transaction</property-description>").optional(),
  "notificationPayload": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `notificationPayload` to the tool, first call the tool `expandSchema` with \"/properties/notificationPayload\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Custom key-value pairs payload for a notification</property-description>"),
  "url": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `url` to the tool, first call the tool `expandSchema` with \"/properties/url\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>REST application constraint (Hypermedia As The Engine Of Application State)</property-description>").optional()
}