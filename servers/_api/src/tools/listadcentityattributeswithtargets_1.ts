import { z } from "zod"

export const toolName = `listadcentityattributeswithtargets_1`
export const toolDescription = `List entity attributes with related usage`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/withTargets`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "dataTypes",
    "ilikeQuery",
    "onlyUsable",
    "attributeInclude",
    "withoutTargets",
    "targetInclude",
    "nameOrder",
    "typeOrder",
    "limit",
    "offset"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "dataTypes": z.string(), "ilikeQuery": z.string(), "onlyUsable": z.boolean(), "attributeInclude": z.enum(["all","deleted","non-deleted"]), "withoutTargets": z.boolean(), "targetInclude": z.enum(["all","deleted","non-deleted"]), "nameOrder": z.enum(["asc","desc","none"]), "typeOrder": z.enum(["asc","desc","none"]), "limit": z.number().int(), "offset": z.number().int() }).shape