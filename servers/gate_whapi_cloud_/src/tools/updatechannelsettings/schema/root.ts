import { z } from "zod"

export const inputParamsSchema = {
  "callback_backoff_delay_ms": z.number().gte(3000).lte(15000).describe("Backoff delay for a failed callback in milliseconds This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.").optional(),
  "max_callback_backoff_delay_ms": z.number().gte(600000).lte(3600000).describe("Maximum delay for a failed callback in milliseconds").optional(),
  "callback_persist": z.boolean().describe("Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.").optional(),
  "media": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `media` to the tool, first call the tool `expandSchema` with \"/properties/media\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "webhooks": z.array(z.string()).optional(),
  "proxy": z.string().regex(new RegExp("^socks5h?:\\/\\/([!-\\/:-@[-`{-~a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)@(((?:[0-9]{1,3}\\.){3}[0-9]{1,3})|[a-zA-Z0-9.]+):([0-9]{1,5})$|^$")).describe("Use your Socks5 proxy if your account activity arouses suspicion from WhatsApp. This can help maintain anonymity and ensure smooth operation.").optional(),
  "mobile_proxy": z.string().describe("Service proxy for mobile authorization.").optional(),
  "offline_mode": z.boolean().describe("When true, API will not send online status to the server on connection. This will allow you to receive push notifications to devices connected to the number. Working after reconnect.").optional(),
  "full_history": z.boolean().describe("When true, all messages will be cached after the connection. If false, old messages will selectively not be cached, allowing large accounts to run faster. Working after reconnect.").optional()
}