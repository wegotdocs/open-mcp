export { inputParams } from "./schema/root.js"

export const toolName = `deleteorder`
export const toolDescription = `Delete purchase order by identifier.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/store/order/{orderId}`
export const method = `delete`
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