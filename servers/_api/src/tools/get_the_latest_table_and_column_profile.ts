import { z } from "zod"

export const toolName = `get_the_latest_table_and_column_profile`
export const toolDescription = `Get the latest table profile`
export const baseUrl = `/api`
export const path = `/v1/tables/{fqn}/tableProfile/latest`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("FQN of the table or column") }).shape