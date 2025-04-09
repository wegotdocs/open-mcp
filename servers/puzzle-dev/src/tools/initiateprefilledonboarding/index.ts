export { inputParams } from "./schema/root.js"

export const toolName = `initiateprefilledonboarding`
export const toolDescription = `Initiate Prefilled Onboarding | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/onboarding`
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