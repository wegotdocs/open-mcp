import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().url().describe("The URL to which the payloads will be delivered."),
  "content_type": z.string().describe("The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.").optional(),
  "secret": z.string().describe("If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).").optional(),
  "insecure_ssl": z.string().describe("Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**").optional(),
  "username": z.string().optional(),
  "password": z.string().optional()
}