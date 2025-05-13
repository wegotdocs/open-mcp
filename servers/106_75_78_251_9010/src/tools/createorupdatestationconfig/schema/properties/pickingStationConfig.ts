import { z } from "zod"

export const inputParamsSchema = {
  "emptyToteRecycle": z.boolean().optional(),
  "leftPutWallDisplayOrder": z.enum(["LEFT_TO_RIGHT","RIGHT_TO_LEFT"]).optional(),
  "rightPutWallDisplayOrder": z.enum(["LEFT_TO_RIGHT","RIGHT_TO_LEFT"]).optional(),
  "putWallTagConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `putWallTagConfig` to the tool, first call the tool `expandSchema` with \"/properties/pickingStationConfig/properties/putWallTagConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "putWallSlotFields": z.array(z.object({ "fieldName": z.string().optional(), "fieldDesc": z.string().optional(), "fieldValue": z.string().optional(), "display": z.boolean().optional(), "color": z.string().optional(), "bold": z.boolean().optional() })).optional()
}