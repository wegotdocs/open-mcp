import { z } from "zod"

export const inputParamsSchema = {
  "idEspecialidad": z.string(),
  "idAseguradora": z.string()
}