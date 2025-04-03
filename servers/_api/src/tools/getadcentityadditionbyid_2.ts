import { z } from "zod"

export const toolName = `getadcentityadditionbyid_2`
export const toolDescription = `Get a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/helpers/adcGlossaryTermType/additionAndDirective`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "termTypeId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "termTypeId": z.string().uuid().optional() }).shape