import { z } from "zod"

export const inputParams = {
  "orderId": z.string().describe("The ID of the order."),
  "company": z.enum(["yurtici","mng","ptt"]).describe("Shipping company."),
  "type": z.enum(["firstShipment","secondShipment","returnShipment"]).describe("Type of the shipping. firstShipment and secondShipment are used for seller to buyer direction, returnShipment is used for buyer to seller direction.").optional()
}