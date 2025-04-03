import { z } from "zod"

export const toolName = `synclastworkflowinstancesandtasks`
export const toolDescription = `Принудительно синхронизировать состояние с WMS`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/instances/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "duration"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "duration": z.string().describe("Синхронизировать состояние за последние 'duration'; формат - ISO 8601 Duration").optional() }).shape