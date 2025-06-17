import { z } from "zod"

export const inputParamsSchema = {
  "webHookUrl": z.string().describe("Webhook Url"),
  "webHookUsername": z.string().describe("Webhook HTTP Authentication Username"),
  "webHookPassword": z.string().describe("Webhook HTTP Authentication Password. An empty string will be returned in the response")
}