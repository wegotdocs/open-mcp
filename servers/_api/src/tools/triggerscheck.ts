import { z } from "zod"

export const toolName = `triggerscheck`
export const toolDescription = `Return glossaryTermWorkflowConfigs that contains at least one trigger from payload`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/glossaryTerm/configurations/triggersCheck`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape