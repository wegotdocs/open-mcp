import { z } from "zod"

export const inputParamsSchema = {
  "propertyId": z.number().int(),
  "linkId": z.number().int(),
  "name": z.string().min(0).max(255),
  "lang": z.string().nullable().optional(),
  "type": z.enum(["ARTICLE","DOCUMENT","FLOOR_PLAN","MAP","ONLINE_BROCHURE","VIDEO","VIRTUAL_TOUR"]),
  "publish": z.boolean().optional(),
  "visibleNetwork": z.boolean().optional(),
  "excludePortals": z.boolean().optional(),
  "url": z.string(),
  "description": z.string().nullable().optional()
}