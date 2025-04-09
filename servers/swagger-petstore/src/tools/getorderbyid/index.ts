export { inputParams } from "./schema/root.js"

export const toolName = `getorderbyid`
export const toolDescription = `Find purchase order by ID.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/store/order/{orderId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "orderId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}