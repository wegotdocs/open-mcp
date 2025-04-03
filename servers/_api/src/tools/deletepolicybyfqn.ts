import { z } from "zod"

export const toolName = `deletepolicybyfqn`
export const toolDescription = `Delete a policy by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/policies/name/{fqn}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the policy"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape