import { z } from "zod"

export const toolName = `patchattributeconfig`
export const toolDescription = `Обновить конфигурацию атрибута`
export const baseUrl = `/api`
export const path = `/v1/metadata/{type}/attributes`
export const method = `patch`
export const security = []
export const keys = {
  "query": [
    "subTypeId"
  ],
  "header": [],
  "path": [
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.string(), "subTypeId": z.string().uuid().optional() }).shape