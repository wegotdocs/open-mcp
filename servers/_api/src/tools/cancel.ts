import { z } from "zod"

export const toolName = `cancel`
export const toolDescription = `Прервать процесс согласования`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/{id}/cancel`
export const method = `post`
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

export const inputParams = z.object({ "id": z.string().describe("User Task id") }).shape