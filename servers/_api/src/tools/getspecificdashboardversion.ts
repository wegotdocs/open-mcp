import { z } from "zod"

export const toolName = `getspecificdashboardversion`
export const toolDescription = `Get a version of the dashboard`
export const baseUrl = `/api`
export const path = `/v1/dashboards/{id}/versions/{version}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "version"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the dashboard"), "version": z.string().describe("Dashboard version number in the form `major`.`minor`") }).shape