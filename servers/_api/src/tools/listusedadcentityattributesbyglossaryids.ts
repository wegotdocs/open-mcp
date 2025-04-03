import { z } from "zod"

export const toolName = `listusedadcentityattributesbyglossaryids`
export const toolDescription = `List used entity attributes by glossaryIds`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/used`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "glossaryIds",
    "termTypeId",
    "nameRegExp"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "glossaryIds": z.array(z.string()).optional(), "termTypeId": z.string().uuid().optional(), "nameRegExp": z.string().optional() }).shape