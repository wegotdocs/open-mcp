import { z } from "zod"

export const inputParamsSchema = {
  "OrderID": z.string().regex(new RegExp("^([\\d]{10,18})?$")).describe("Order ID"),
  "order_token": z.string().describe("Base64 token from order for receiving information").optional()
}