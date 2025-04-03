import { z } from "zod"

export const toolName = `addtablejoininfo`
export const toolDescription = `Add table join information`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/joins`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "columnJoins",
    "dayCount",
    "directTableJoins",
    "startDate"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table"), "columnJoins": z.array(z.object({ "columnName": z.string().regex(new RegExp("^((?!::).)*$")).min(1).max(256).optional(), "joinedWith": z.array(z.object({ "fullyQualifiedName": z.string().min(1).max(3072), "joinCount": z.number().int() })).optional() })).optional(), "dayCount": z.number().int().optional(), "directTableJoins": z.array(z.object({ "fullyQualifiedName": z.string().min(1).max(3072), "joinCount": z.number().int() })).optional(), "startDate": z.string().optional() }).shape