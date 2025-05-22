import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The webhook's ID, which is generated after creating a webhook successfully."),
  "hook_url": z.string().nullable().describe("The webhook's URL. Triggered events will be sent to the url provided here.").optional(),
  "secret": z.string().nullable().describe("[single-line only]\n\nWebhook's signature secret that's used to confirm the validity of the request.").optional()
}