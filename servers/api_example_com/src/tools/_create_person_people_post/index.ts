export { inputParams } from "./schema/root.js"

export const toolName = `_create_person_people_post`
export const toolDescription = `Create Person`
export const baseUrl = `https://api.example.com`
export const path = `/people`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "address",
    "birth"
  ]
}
export const flatMap = {}