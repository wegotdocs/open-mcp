import { z } from "zod"

export const inputParamsSchema = {
  "page": z.string().describe("Número da página listada. Valor padrão é 1").optional(),
  "limit": z.string().describe("Limite de tarefas que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional(),
  "deal_id": z.string().describe("ID da negociação").optional(),
  "done": z.string().describe("Se a tarefa está concluída").optional(),
  "type": z.string().describe("Tipo de tarefa. Valores possíveis: (call, email, meeting, task, lunch, visit, whatsapp)").optional(),
  "user_id": z.string().describe("ID do usuário").optional(),
  "date_start": z.string().describe("Filtrar por data de início").optional(),
  "date_end": z.string().describe("Filtrar por data final").optional(),
  "done_date_start": z.string().describe("Filtrar por data de conclusão - início").optional(),
  "done_date_end": z.string().describe("Filtrar por data de conclusão - final").optional()
}