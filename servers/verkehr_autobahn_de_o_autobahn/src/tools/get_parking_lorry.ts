import { z } from "zod"

export const toolName = `get_parking_lorry`
export const toolDescription = `Details eines Rastplatzes`
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`
export const path = `/details/parking_lorry/{lorryId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "lorryId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "lorryId": z.string()
}