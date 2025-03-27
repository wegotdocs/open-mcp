import { z } from "zod"

export const toolName = `publishpushnotificationtodevices`
export const toolDescription = `Publish a push notification to device(s)`
export const baseUrl = `https://rest.ably.io`
export const path = `/push/publish`
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

export const inputParams = z.object({ "body": z.object({ "push": z.object({ "apns": z.object({ "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional() }).describe("Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)").optional(), "data": z.string().describe("Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).").optional(), "fcm": z.object({ "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional() }).describe("Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)").optional(), "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional(), "web": z.object({ "notification": z.object({ "body": z.string().describe("Text below title on the expanded notification.").optional(), "collapseKey": z.string().describe("Platform-specific, used to group notifications together.").optional(), "icon": z.string().describe("Platform-specific icon for the notification.").optional(), "sound": z.string().describe("Platform-specific sound for the notification.").optional(), "title": z.string().describe("Title to display at the notification.").optional() }).optional() }).describe("Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)").optional() }).optional(), "recipient": z.object({ "clientId": z.string().describe("Client ID of recipient").optional(), "deviceId": z.string().describe("Client ID of recipient").optional(), "deviceToken": z.string().describe("when using APNs, specifies the required device token.").optional(), "registrationToken": z.string().describe("when using GCM or FCM, specifies the required registration token.").optional(), "transportType": z.enum(["apns","fcm","gcm"]).describe("Defines which push platform is being used.").optional() }).describe("Push recipient details for a device.") }).optional() }).shape