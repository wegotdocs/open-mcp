import { z } from "zod"

export const toolName = `listalltestdefinitionversion`
export const toolDescription = `List test definition versions`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testDefinitions/{id}/versions`
export const method = `get`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the test definition") }).shape