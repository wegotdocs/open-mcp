export { inputParams } from "./schema/root.js"

export const toolName = `upsertjournalentry`
export const toolDescription = `Create Journal Entry | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/journalEntries`
export const method = `post`
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