import { z } from "zod"

export const toolName = `updatevote`
export const toolDescription = `Update Vote for a query`
export const baseUrl = `/api`
export const path = `/v1/queries/{id}/vote`
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
    "updatedVoteType"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the Query"), "updatedVoteType": z.enum(["votedUp","votedDown","unVoted"]).optional() }).shape