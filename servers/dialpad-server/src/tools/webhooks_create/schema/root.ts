import { z } from "zod"

export const inputParamsSchema = {
  "hook_url": z.string().nullable().describe("The webhook's URL. Triggered events will be sent to the url provided here."),
  "secret": z.string().nullable().describe("[single-line only]\n\nWebhook's signature secret that's used to confirm the validity of the request.").optional()
}