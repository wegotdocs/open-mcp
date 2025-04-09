export { inputParams } from "./schema/root.js"

export const toolName = `healthcheck`
export const toolDescription = `Healthcheck`
export const baseUrl = `https://api.epa.gov/lew`
export const path = `/v1/health`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [
    "X-Api-Key"
  ],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}