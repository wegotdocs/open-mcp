import { z } from "zod"

export const inputParamsSchema = {
  "systemCode": z.string().optional(),
  "parentId": z.number().int().optional(),
  "type": z.number().int(),
  "title": z.string().min(0).max(128),
  "description": z.string().min(0).max(256).optional(),
  "permissions": z.string().min(0).max(128),
  "component": z.string().optional(),
  "orderNum": z.number().int().gte(1),
  "icon": z.string().min(0).max(32).optional(),
  "path": z.string().min(0).max(256).optional(),
  "iframeShow": z.number().int().optional(),
  "menuId": z.number().int()
}