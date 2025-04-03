import { z } from "zod"

export const toolName = `getspecificdashboardserviceversion`
export const toolDescription = `Get a version of the dashboard service`
export const baseUrl = `/api`
export const path = `/v1/services/dashboardServices/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the dashboard service"), "version": z.string().describe("dashboard service version number in the form `major`.`minor`") }).shape