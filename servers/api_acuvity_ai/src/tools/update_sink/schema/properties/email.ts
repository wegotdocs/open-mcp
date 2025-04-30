import { z } from "zod"

export const inputParamsSchema = {
  "recipients": z.array(z.string()).describe("The list of email recipients the notification will be sent to.")
}