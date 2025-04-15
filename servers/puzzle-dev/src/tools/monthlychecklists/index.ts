export { inputParams } from "./schema/root.js"

export const toolName = `monthlychecklists`
export const toolDescription = `Get Monthly Checklist | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/monthly-checklists`
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