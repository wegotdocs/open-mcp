import { z } from "zod"

export const toolName = `getorderbyid`
export const toolDescription = `Find purchase order by ID.`
export const baseUrl = `/api/v3`
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

export const inputParams = {
  "orderId": z.number().int().describe("ID of order that needs to be fetched")
}