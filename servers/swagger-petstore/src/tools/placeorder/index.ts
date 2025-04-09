export { inputParams } from "./schema/root.js"

export const toolName = `placeorder`
export const toolDescription = `Place an order for a pet.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/store/order`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "petId",
    "quantity",
    "shipDate",
    "status",
    "complete"
  ]
}
export const flatMap = {}