import { z } from "zod"

export const inputParamsSchema = {
  "inboundPlanOrderId": z.number().int().optional(),
  "inboundPlanOrderDetailId": z.number().int().optional(),
  "warehouseCode": z.string().min(0).max(64),
  "batchAttributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `batchAttributes` to the tool, first call the tool `expandSchema` with \"/properties/batchAttributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "qtyAccepted": z.number().int().gte(1),
  "skuId": z.number().int(),
  "qtyAbnormal": z.number().int().gte(1).optional(),
  "targetContainerId": z.number().int(),
  "targetContainerCode": z.string().min(0).max(64),
  "targetContainerSpecCode": z.string().min(0).max(64),
  "targetContainerSlotCode": z.string().min(0).max(64),
  "targetContainerFace": z.string().optional(),
  "workStationId": z.number().int()
}