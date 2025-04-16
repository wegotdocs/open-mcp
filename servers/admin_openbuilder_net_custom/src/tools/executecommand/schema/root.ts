import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("ID del progetto nel database"),
  "command": z.string().describe("Comando SSH da eseguire sul server remoto")
}