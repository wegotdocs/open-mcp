import { z } from "zod"

export const toolName = `deletedatamodel`
export const toolDescription = `Delete a data model by `id`.`
export const baseUrl = `/api`
export const path = `/v1/dashboard/datamodels/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the data model"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape