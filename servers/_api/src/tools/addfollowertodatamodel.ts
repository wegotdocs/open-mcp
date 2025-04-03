import { z } from "zod"

export const toolName = `addfollowertodatamodel`
export const toolDescription = `Add a follower`
export const baseUrl = `/api`
export const path = `/v1/dashboard/datamodels/{id}/followers`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the data model") }).shape