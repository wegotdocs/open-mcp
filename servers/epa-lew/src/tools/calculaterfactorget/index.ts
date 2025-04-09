export { inputParams } from "./schema/root.js"

export const toolName = `calculaterfactorget`
export const toolDescription = `Determine your eligibility for the LEW`
export const baseUrl = `https://api.epa.gov/lew`
export const path = `/v1/rfactor`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "start_date",
    "end_date",
    "location"
  ],
  "header": [
    "X-Api-Key"
  ],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}