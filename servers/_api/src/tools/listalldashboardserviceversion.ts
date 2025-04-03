import { z } from "zod"

export const toolName = `listalldashboardserviceversion`
export const toolDescription = `List dashboard service versions`
export const baseUrl = `/api`
export const path = `/v1/services/dashboardServices/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the dashboard service") }).shape