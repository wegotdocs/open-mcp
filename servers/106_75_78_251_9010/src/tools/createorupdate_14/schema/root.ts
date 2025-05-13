import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseCode": z.string(),
  "workStationId": z.number().int(),
  "putWallCode": z.string(),
  "putWallName": z.string(),
  "containerSpecCode": z.string(),
  "putWallSlots": z.array(z.object({ "id": z.number().int().optional(), "workStationId": z.number().int().optional(), "putWallId": z.number().int().optional(), "putWallCode": z.string().optional(), "putWallSlotCode": z.string().optional(), "ptlTag": z.string(), "face": z.string().optional(), "level": z.string().optional(), "bay": z.string().optional(), "locLevel": z.number().int().optional(), "locBay": z.number().int().optional(), "enable": z.boolean().optional(), "pickingOrderId": z.number().int().optional(), "taskDispatchRuleId": z.number().int().optional(), "putWallSlotStatus": z.enum(["IDLE","WAITING_BINDING","BOUND","DISPATCH","WAITING_SEAL"]).optional(), "transferContainerCode": z.string().optional(), "transferContainerRecordId": z.number().int().optional(), "version": z.number().int().optional(), "putWallSlotDesc": z.array(z.object({ "fieldName": z.string().optional(), "fieldDesc": z.string().optional(), "fieldValue": z.string().optional(), "display": z.boolean().optional(), "color": z.string().optional(), "bold": z.boolean().optional() })).optional(), "qtyDispatched": z.number().int().optional() })),
  "location": z.string().optional(),
  "enable": z.boolean().optional(),
  "displayOrder": z.enum(["LEFT_TO_RIGHT","RIGHT_TO_LEFT"]).optional(),
  "version": z.number().int().optional(),
  "putWallStatus": z.enum(["IDLE","WORKING"]).optional(),
  "active": z.boolean().optional(),
  "taskDispatchRuleId": z.number().int().optional()
}