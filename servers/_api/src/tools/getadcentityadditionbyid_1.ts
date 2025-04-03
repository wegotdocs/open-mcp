import { z } from "zod"

export const toolName = `getadcentityadditionbyid_1`
export const toolDescription = `Get a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/helpers/glossaries/additionAndDirective`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "glossaryId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "glossaryId": z.string().uuid().optional() }).shape