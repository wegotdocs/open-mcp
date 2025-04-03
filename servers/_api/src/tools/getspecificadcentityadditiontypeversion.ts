import { z } from "zod"

export const toolName = `getspecificadcentityadditiontypeversion`
export const toolDescription = `Get a version of the entity addition type`
export const baseUrl = `/api`
export const path = `/v1/custom/{type}/{id}/versions/{version}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "version",
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("AdcEntityAdditionType Id"), "version": z.string().describe("AdcEntityAdditionType version number in the form `major`.`minor`"), "type": z.string() }).shape