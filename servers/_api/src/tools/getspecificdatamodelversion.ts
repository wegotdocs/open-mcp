import { z } from "zod"

export const toolName = `getspecificdatamodelversion`
export const toolDescription = `Get a version of the dashboard datamodel`
export const baseUrl = `/api`
export const path = `/v1/dashboard/datamodels/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the dashboard datamodel"), "version": z.string().describe("DataModel version number in the form `major`.`minor`") }).shape