import { z } from "zod"

export const toolName = `publishmessage`
export const toolDescription = `Publish a message`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/messaging/publish`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "destinationName",
    "message",
    "retain"
  ]
}
export const flatMap = {}

export const inputParams = {
  "destinationName": z.string().describe("The topic to which the message will be published. This should be a valid topic name recognized by the messaging system."),
  "message": z.object({ "identifier": z.number().int().describe("The event identifier").optional(), "payload": z.string().describe("The main payload content of the message, represented as a byte64 string."), "contentType": z.string().describe("The MIME type of the message payload, indicating its format.").optional(), "correlationData": z.string().describe("Additional data used for correlating messages, provided as a byte array.").optional(), "expiry": z.number().int().describe("The expiry time for the message in milliseconds. Default is -1, indicating no expiry."), "priority": z.number().int().describe("The priority level of the message, ranging from 0 (lowest) to 10 (highest). Default is 4 (normal)."), "qualityOfService": z.number().int().describe("The Quality of Service level for the message: 0 (at most once), 1 (at least once), or 2 (exactly once)."), "creation": z.string().datetime({ offset: true }).describe("The time the server received this event").optional(), "dataMap": z.record(z.record(z.any()).describe("A map containing optional key-value pairs associated with the message.")).describe("A map containing optional key-value pairs associated with the message.").optional(), "metaData": z.record(z.string().describe("A map of string, string values that the server has added to the event as it was processed")).describe("A map of string, string values that the server has added to the event as it was processed").optional() }).describe("Represents a messaging entity with configurable quality, priority, and metadata attributes."),
  "retain": z.boolean().describe("Indicates if the message should be retained on the destination. If true, the message will be stored and sent to new subscribers on the topic.").optional()
}