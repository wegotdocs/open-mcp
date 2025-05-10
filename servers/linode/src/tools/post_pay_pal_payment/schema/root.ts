import { z } from "zod"

export const inputParams = {
  "cancel_url": z.string().describe("The URL to have PayPal redirect to when Payment is canceled."),
  "redirect_url": z.string().describe("The URL to have PayPal redirect to when Payment is approved."),
  "usd": z.string().describe("The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.")
}