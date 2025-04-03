import { z } from "zod"

export const toolName = `patchconfiguration`
export const toolDescription = `Update a configuration`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/glossaryTerm/configurations/{id}`
export const method = `patch`
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