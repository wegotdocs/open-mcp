import { z } from "zod"

export const toolName = `getspecificadcadditiondirectiveversion`
export const toolDescription = `Get a version of the entity addition directive`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcAdditionDirectives/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().describe("AdcAdditionDirective Id"), "version": z.string().describe("AdcAdditionDirective version number in the form `major`.`minor`") }).shape