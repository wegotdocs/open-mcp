import { z } from "zod"

export const toolName = `listalladcentityadditiontypeversion`
export const toolDescription = `List entity addition types versions`
export const baseUrl = `/api`
export const path = `/v1/custom/{type}/{id}/versions`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("adcEntityAdditionType Id"), "type": z.string() }).shape