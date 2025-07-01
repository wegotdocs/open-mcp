import { z } from "zod"

export const inputParamsSchema = {
  "successUrl": z.string().describe("URL that the customer will be redirected to after successful payment of the invoice or payment link"),
  "autoRedirect": z.boolean().describe("Define whether the customer will be automatically redirected or will just be informed with a button to return to the website. The default is true, if you want to disable it, enter false").optional()
}