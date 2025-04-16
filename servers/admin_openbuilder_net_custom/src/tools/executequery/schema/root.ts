import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("ID del progetto nel database"),
  "query": z.string().describe("Query SQL da eseguire"),
  "params": z.array(z.union([z.string(), z.number(), z.boolean()])).describe("Parametri per query preparate (opzionale)").optional()
}