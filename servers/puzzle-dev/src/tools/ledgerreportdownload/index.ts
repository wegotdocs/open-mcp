export { inputParams } from "./schema/root.js"

export const toolName = `ledgerreportdownload`
export const toolDescription = `Get Trial Balance Report | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/trial-balance`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "input"
  ]
}
export const flatMap = {}