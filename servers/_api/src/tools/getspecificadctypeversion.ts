import { z } from "zod"

export const toolName = `getspecificadctypeversion`
export const toolDescription = `Get a version of the entity addition type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcTypes/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().describe("AdcType Id"), "version": z.string().describe("AdcType version number in the form `major`.`minor`") }).shape