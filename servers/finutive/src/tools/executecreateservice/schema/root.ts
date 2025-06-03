import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "description": z.string().optional(),
  "name_english": z.string().optional(),
  "description_english": z.string().optional(),
  "icon": z.string().optional(),
  "status": z.string().optional(),
  "onboarding": z.boolean().optional(),
  "recurrent": z.boolean().optional(),
  "products": z.array(z.object({ "id": z.string().optional(), "product_id": z.string().optional(), "product_name": z.string().optional(), "typology": z.enum(["ANY","BUSINESS","AUTONOMOUS"]).optional(), "serie_id": z.string().optional(), "price": z.number().optional(), "disabled": z.boolean().optional(), "payment_type": z.enum(["UNIQUE","MONTHLY","ANNUAL"]).optional(), "tax_regime": z.enum(["GENERAL","NOT_SUBJECT_SALES"]).optional() })).optional(),
  "file_types": z.array(z.string()).optional(),
  "url_landing": z.string().optional(),
  "collaborator_email": z.string().optional(),
  "email_content": z.string().optional(),
  "email_attachments": z.string().optional(),
  "counter": z.number().int().optional(),
  "outsourced": z.boolean().optional(),
  "serie_id": z.string().optional(),
  "external_category": z.string().optional(),
  "ambitions": z.array(z.enum(["LAUNCHING","STABILIZATION","GROWTH","INORGANIC_GROWTH","EXPANSION_AND_INTERNATIONALIZATION"])).optional(),
  "partner_privacy_policy": z.string().optional(),
  "responsibles": z.array(z.string()).optional()
}