import { z } from "zod"

export const inputParamsSchema = {
  "page": z.string().describe("Número atual da página").optional(),
  "limit": z.string().describe("Limite de negociações que serão listadas. Valor padrão é 20. Valor máximo é 200").optional(),
  "order": z.string().describe("Ordenação. Valor padrão é \"created_at\"").optional(),
  "direction": z.string().describe("Ordenação da lista. \"asc\" ou \"desc\", padrão é \"desc\"").optional(),
  "name": z.string().describe("Nome da negociação. Para buscas com nome exato, usar o parâmetro exact_name= true").optional(),
  "win": z.string().describe("Negociações ganhas. O valor true (retorna as negociações \"ganhas\"), false (retorna as negociações \"perdidas\") e null (retorna as negociações \"em aberto\")").optional(),
  "user_id": z.string().describe("ID do usuário relacionado à negociação").optional(),
  "closed_at": z.string().describe("Ao informar true (retorna as negociações \"ganhas\" ou \"perdidas\"). Ao informar false (retorna as negociações \"em aberto\" OU \"pausadas\")").optional(),
  "closed_at_period": z.string().describe("Data de fechamento da negociação: se true deve ser informado start_date e end_date").optional(),
  "created_at_period": z.string().describe("Data de criação da negociação: se true, deve ser informado start_date e end_date").optional(),
  "prediction_date_period": z.string().describe("Data de previsão de fechamento da negociação: se true, deve ser informado start_date e end_date").optional(),
  "start_date": z.string().describe("Primeiro dia/hora em que deve ser aplicado o filtro para o parâmetro closed_at_period ou created_at_period. Ex.: \"start_date\": \"2020-12-14T15:00:00\"").optional(),
  "end_date": z.string().describe("Último dia/hora em que deve ser aplicado o filtro para o parâmetro closed_at_period ou created_at_period. Ex.: \"end_date\": \"2020-12-14T15:00:00\"").optional(),
  "campaign_id": z.string().describe("ID da campanha").optional(),
  "deal_stage_id": z.string().describe("ID da etapa").optional(),
  "deal_lost_reason_id": z.string().describe("ID do motivo de perda").optional(),
  "deal_pipeline_id": z.string().describe("ID do funil").optional(),
  "organization": z.string().describe("ID da empresa").optional(),
  "hold": z.string().describe("Estado da negociação pausada. Se marcado como true (retorna todas negociações \"pausadas\"). Para outros casos, não deve-se utilizar esse parâmetro").optional(),
  "product_presence": z.string().describe("Negociações que contenham produtos/serviços relacionados. Se false (nenhum produto relacionado), true (um ou mais produtos relacionados) ou uma lista de IDs de produto. A lista de IDs deve ser informada com os valores separados por vírgula. Ex.: 5esdsds, d767dsdssd, c6e40fd2f000972a083").optional(),
  "next_page": z.string().describe("O parâmetro next_page serve para consultar a próxima página de resultados da busca corrente. Ele é obtido através da primeira consulta feita por esta API, porém todos os demais resultados apresentam este campo que se utilizado na requisição, navegam para sua próxima página.").optional()
}