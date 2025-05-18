import { z } from "zod"

export const inputParamsSchema = {
  "activityType": z.enum(["subscriptionActivityTypeUnspecified","all","uploads"]).describe("The type of activity this subscription is for (only uploads, everything).").optional(),
  "newItemCount": z.number().int().describe("The number of new items in the subscription since its content was last read.").optional(),
  "totalItemCount": z.number().int().describe("The approximate number of items that the subscription points to.").optional()
}