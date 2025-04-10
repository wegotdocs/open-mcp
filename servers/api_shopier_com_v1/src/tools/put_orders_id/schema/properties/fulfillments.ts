import { z } from "zod"

export const inputParams = {
  "productType": z.enum(["physical","digital"]).describe("Type of the delivery.").optional(),
  "shippingCompany": z.enum(["yurtici","mng","ptt","aras","surat","ups","fedex","dhl","tnt","pts","aramex","interGlobal","other"]).describe("Shipping company used for the delivery.").optional(),
  "trackingNumber": z.string().describe("Tracking number of the shipping.").optional(),
  "note": z.string().describe("Required for digital deliveries, represents how the delivery is done.").optional()
}