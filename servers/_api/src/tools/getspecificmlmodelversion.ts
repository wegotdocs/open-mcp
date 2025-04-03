import { z } from "zod"

export const toolName = `getspecificmlmodelversion`
export const toolDescription = `Get a version of the ML model`
export const baseUrl = `/api`
export const path = `/v1/mlmodels/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the ML Model"), "version": z.string().describe("ML Model version number in the form `major`.`minor`") }).shape