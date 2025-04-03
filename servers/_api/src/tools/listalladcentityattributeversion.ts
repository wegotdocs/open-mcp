import { z } from "zod"

export const toolName = `listalladcentityattributeversion`
export const toolDescription = `List entity addition types versions`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/{id}/versions`
export const method = `get`
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

export const inputParams = z.object({ "id": z.string().describe("adcEntityAdditionType Id") }).shape