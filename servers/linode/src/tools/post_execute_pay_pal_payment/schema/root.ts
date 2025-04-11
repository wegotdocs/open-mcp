import { z } from "zod"

export const inputParams = {
  "payer_id": z.string().describe("The PayerID returned by PayPal during the transaction authorization process."),
  "payment_id": z.string().describe("The PaymentID returned from [Stage a PayPal payment](https://techdocs.akamai.com/linode-api/reference/post-pay-pal-payment) that has been approved with PayPal.")
}