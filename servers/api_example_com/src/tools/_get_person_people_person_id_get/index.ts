export { inputParams } from "./schema/root.js"

export const toolName = `_get_person_people_person_id_get`
export const toolDescription = `Get Person`
export const baseUrl = `https://api.example.com`
export const path = `/people/{person_id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "person_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}