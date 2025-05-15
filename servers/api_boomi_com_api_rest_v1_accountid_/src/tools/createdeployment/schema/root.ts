import { z } from "zod"

export const inputParamsSchema = {
  "componentId": z.string(),
  "componentType": z.string(),
  "current": z.boolean().optional(),
  "deployedBy": z.string(),
  "deployedOn": z.string().datetime({ offset: true }),
  "digest": z.string(),
  "environmentId": z.string(),
  "id": z.string(),
  "listenerStatus": z.enum(["RUNNING","PAUSED"]).optional(),
  "message": z.string().optional(),
  "notes": z.string(),
  "processId": z.string(),
  "version": z.number().int().optional()
}