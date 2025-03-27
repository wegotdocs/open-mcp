import { z } from "zod"

export const toolName = `apps_update_webhook_config_for_app`
export const toolDescription = `Update a webhook configuration for an app`
export const baseUrl = `https://github.com`
export const path = `/app/hook/config`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "body": z.object({ "content_type": z.string().describe("The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.").optional(), "insecure_ssl": z.string().describe("Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**").optional(), "secret": z.string().describe("If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-cloud@latest//webhooks/event-payloads/#delivery-headers).").optional(), "url": z.string().url().describe("The URL to which the payloads will be delivered.").optional() }).optional() }).shape