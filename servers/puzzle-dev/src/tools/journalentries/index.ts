export { inputParams } from "./schema/root.js"

export const toolName = `journalentries`
export const toolDescription = `Get Journal Entries | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/journalEntries`
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