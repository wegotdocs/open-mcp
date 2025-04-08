import { z } from "zod"

export const toolName = `deleteorder`
export const toolDescription = `Delete purchase order by identifier.`
export const baseUrl = `https://petstore.swagger.io/v2`
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

export const inputParams = {
  "orderId": z.number().int().describe("ID of the order that needs to be deleted")
}