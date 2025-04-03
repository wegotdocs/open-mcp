import { z } from "zod"

export const toolName = `getspecificchartversion`
export const toolDescription = `Get a version of the chart`
export const baseUrl = `/api`
export const path = `/v1/charts/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the chart"), "version": z.string().describe("Chart version number in the form `major`.`minor`") }).shape