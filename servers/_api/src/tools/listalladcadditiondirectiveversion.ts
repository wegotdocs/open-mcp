import { z } from "zod"

export const toolName = `listalladcadditiondirectiveversion`
export const toolDescription = `List entity directive's verions`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcAdditionDirectives/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().describe("directive Id") }).shape