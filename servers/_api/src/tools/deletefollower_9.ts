import { z } from "zod"

export const toolName = `deletefollower_9`
export const toolDescription = `Remove a follower`
export const baseUrl = `/api`
export const path = `/v1/topics/{id}/followers/{userId}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "userId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the topic"), "userId": z.string().describe("Id of the user being removed as follower") }).shape