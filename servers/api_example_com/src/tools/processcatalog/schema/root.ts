import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().nullable().describe("If it is null it is catalog creation, if it has value it is reprocessing.").optional(),
  "name": z.string().nullable().describe("Name of Catalog").optional(),
  "description": z.string().nullable().describe("Description of Catalog").optional(),
  "secretName": z.string().nullable().describe("Secret name of ConnectionString").optional(),
  "schema": z.string().nullable().describe("Database schema from which to extract the structure of the tables").optional(),
  "definitionsContent": z.string().nullable().describe("Content of the definition files").optional(),
  "dataBaseEngineId": z.number().int().describe("Id of DataBseEngine").optional()
}