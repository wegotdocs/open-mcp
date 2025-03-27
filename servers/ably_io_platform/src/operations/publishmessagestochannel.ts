import { z } from "zod"

export const toolName = `publishmessagestochannel`
export const toolDescription = `Publish a message to a channel`
export const baseUrl = `https://rest.ably.io`
export const path = `/channels/{channel_id}/messages`
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

export const inputParams = z.object({ "path": z.object({ "channel_id": z.string().describe("The [Channel's ID](https://www.ably.io/documentation/rest/channels).") }).optional(), "body": z.object({ "clientId": z.string().describe("The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.").optional(), "connectionId": z.string().describe("The connection ID of the publisher of this message.").optional(), "data": z.string().describe("The string encoded payload, with the encoding specified below.").optional(), "encoding": z.string().describe("This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.").optional(), "extras": z.object({ "push": z.object({ "apns": z.object({ "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional() }).describe("Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)").optional(), "data": z.string().describe("Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).").optional(), "fcm": z.object({ "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional() }).describe("Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)").optional(), "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional(), "web": z.object({ "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional() }).describe("Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)").optional() }).optional() }).describe("Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.").optional(), "id": z.string().describe("A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).").readonly().optional(), "name": z.string().describe("The event name, if provided.").optional(), "timestamp": z.number().int().describe("Timestamp when the message was received by the Ably, as milliseconds since the epoch.").readonly().optional() }).describe("Message object.").optional() }).shape