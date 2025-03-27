import { z } from "zod"

export const toolName = `enterprise_admin_create_global_webhook`
export const toolDescription = `Create a global webhook`
export const baseUrl = `https://github.com`
export const path = `/admin/hooks`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications."), "config": z.object({ "content_type": z.string().describe("The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.").optional(), "insecure_ssl": z.string().describe("Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**").optional(), "secret": z.string().describe("If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://docs.github.com/github-ae@latest/webhooks/event-payloads/#delivery-headers) header.").optional(), "url": z.string().describe("The URL to which the payloads will be delivered.") }).describe("Key/value pairs to provide settings for this webhook."), "events": z.array(z.string()).describe("The [events](https://docs.github.com/github-ae@latest/webhooks/event-payloads) that trigger this webhook. A global webhook can be triggered by `user` and `organization` events. Default: `user` and `organization`.").optional(), "name": z.string().describe("Must be passed as \"web\".") }).optional() }).shape