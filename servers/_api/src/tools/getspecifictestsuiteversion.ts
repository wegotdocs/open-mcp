import { z } from "zod"

export const toolName = `getspecifictestsuiteversion`
export const toolDescription = `Get a version of the test suite`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testSuites/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the test suite"), "version": z.string().describe("Test Suite version number in the form `major`.`minor`") }).shape