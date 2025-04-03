import { z } from "zod"

export const toolName = `getspecificpolicyversion_1`
export const toolDescription = `Get a version of the policy by Id`
export const baseUrl = `/api`
export const path = `/v1/politics/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the policy"), "version": z.string().describe("policy version number in the form `major`.`minor`") }).shape