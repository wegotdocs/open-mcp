import { z } from "zod"

export const toolName = `getspecificpipelineversion`
export const toolDescription = `Get a version of the pipeline`
export const baseUrl = `/api`
export const path = `/v1/pipelines/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the pipeline"), "version": z.string().describe("Pipeline version number in the form `major`.`minor`") }).shape