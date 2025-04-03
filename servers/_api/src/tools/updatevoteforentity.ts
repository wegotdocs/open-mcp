import { z } from "zod"

export const toolName = `updatevoteforentity`
export const toolDescription = `Update Vote for a Entity`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures/{id}/vote`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the Entity"), "updatedVoteType": z.enum(["votedUp","votedDown","unVoted"]).optional() }).shape