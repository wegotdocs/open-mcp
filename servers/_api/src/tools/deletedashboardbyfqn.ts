import { z } from "zod"

export const toolName = `deletedashboardbyfqn`
export const toolDescription = `Delete a dashboard by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/dashboards/name/{fqn}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the dashboard"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape