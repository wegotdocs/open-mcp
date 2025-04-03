import { z } from "zod"

export const toolName = `compareversions`
export const toolDescription = `Возвращает разницу между двумя версиями объекта`
export const baseUrl = `/api`
export const path = `/v1/diff/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "version",
    "versusVersion",
    "entityType"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the entity."), "version": z.string().describe("Higher version number in the form `major`.`minor`."), "versusVersion": z.string().describe("Lower version number in the form `major`.`minor`."), "entityType": z.string().describe("Type of entity") }).shape