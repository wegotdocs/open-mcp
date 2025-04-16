import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("ID del progetto contenente le configurazioni del database"),
  "entity": z.string().describe("Nome dell'entità su cui operare"),
  "id": z.number().int().describe("ID del record da eliminare")
}