import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.number().int(),
  "type": z.enum(["DESCRIPTION","COMMENT","CONDITION","SAVE","DELETE","PRODUCT"]).optional(),
  "createTime": z.string().optional(),
  "anchorId": z.number().int().optional(),
  "pageSize": z.number().int().optional()
}