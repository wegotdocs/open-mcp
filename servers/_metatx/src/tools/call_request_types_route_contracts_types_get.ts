import { z } from "zod"

export const toolName = `call_request_types_route_contracts_types_get`
export const toolDescription = `Call Request Types Route`
export const baseUrl = `/metatx`
export const path = `/contracts/types`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape