export { inputParams } from "./schema/root.js"

export const toolName = `_update_person_people_person_id_patch`
export const toolDescription = `Update Person`
export const baseUrl = `https://api.example.com`
export const path = `/people/{person_id}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "person_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "address",
    "birth"
  ]
}
export const flatMap = {}