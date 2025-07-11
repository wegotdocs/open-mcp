import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID do contato"),
  "name": z.string().describe("Nome do contato").optional(),
  "job_title": z.string().describe("Cargo do contato").optional(),
  "emails": z.array(z.object({ "email": z.string().describe("Endereço de email").optional() })).describe("Lista de emails do contato").optional(),
  "phones": z.array(z.object({ "phone": z.string().describe("Número de telefone").optional() })).describe("Lista de telefones do contato").optional(),
  "birthday": z.string().date().describe("Data de aniversário (formato YYYY-MM-DD)").optional(),
  "social_profiles": z.array(z.object({ "type": z.enum(["facebook","linkedin","skype"]).describe("Tipo de perfil social (facebook, linkedin, skype)").optional(), "url": z.string().describe("URL ou identificador do perfil social").optional() })).describe("Perfis sociais do contato").optional(),
  "organization_id": z.string().describe("ID da organização associada ao contato").optional(),
  "notes": z.string().describe("Observações sobre o contato").optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Campos personalizados do contato</property-description>").optional()
}