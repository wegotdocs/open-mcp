import { z } from "zod"

export const toolName = `deleteadditionfortermtype`
export const toolDescription = `Delete addition for term type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/helpers/adcGlossaryTermType/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid() }).shape