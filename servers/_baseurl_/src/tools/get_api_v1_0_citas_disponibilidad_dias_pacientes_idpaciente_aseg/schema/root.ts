import { z } from "zod"

export const inputParamsSchema = {
  "idPaciente": z.string(),
  "idAseguradora": z.string(),
  "idEspecialidad": z.string(),
  "idEspecialista": z.string(),
  "idTipoCita": z.string(),
  "fechaDesde": z.string(),
  "fechaHasta": z.string()
}