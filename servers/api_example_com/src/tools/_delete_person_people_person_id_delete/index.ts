export { inputParams } from "./schema/root.js"

export const toolName = `_delete_person_people_person_id_delete`
export const toolDescription = `Delete Person`
export const baseUrl = `https://api.example.com`
export const path = `/people/{person_id}`
export const method = `delete`
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