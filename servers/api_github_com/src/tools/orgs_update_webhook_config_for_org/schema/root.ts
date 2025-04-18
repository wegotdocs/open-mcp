import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery."),
  "url": z.string().url().describe("The URL to which the payloads will be delivered.").optional(),
  "content_type": z.string().describe("The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.").optional(),
  "secret": z.string().describe("If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).").optional(),
  "insecure_ssl": z.string().describe("Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**").optional()
}