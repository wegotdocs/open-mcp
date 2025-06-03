import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string(),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "english_name": z.string().optional(),
  "english_description": z.string().optional(),
  "icon": z.string().optional(),
  "status": z.string().optional(),
  "onboarding": z.boolean().optional(),
  "recurrent": z.boolean().optional(),
  "products": z.array(z.object({ "product_id": z.string().optional(), "typology": z.enum(["ANY","BUSINESS","AUTONOMOUS"]).optional(), "serie_id": z.string().optional(), "price": z.number().optional(), "disabled": z.boolean().optional(), "payment_type": z.enum(["UNIQUE","MONTHLY","ANNUAL"]).optional(), "tax_regime": z.enum(["GENERAL","NOT_SUBJECT_SALES"]).optional() })).optional(),
  "file_types": z.array(z.string()).optional(),
  "url_landing": z.string().optional(),
  "collaborator_email": z.string().optional(),
  "email_content": z.string().optional(),
  "email_attachments": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "url": z.string().optional(), "type": z.enum(["VIDEO","IMAGE","AUDIO","DOCUMENT","OTHER"]).optional() })).optional(),
  "counter": z.number().int().optional(),
  "outsourced": z.boolean().optional(),
  "serie_id": z.string().optional(),
  "external_category": z.enum(["GET_TO_WORK","TAKE_CARE_OF_EMPLOYEES","IMPROVE_YOUR_FINANCES","PROTECT_YOUR_BUSINESS","REDUCE_YOUR_EXPENSES"]).optional(),
  "ambitions": z.array(z.enum(["LAUNCHING","STABILIZATION","GROWTH","INORGANIC_GROWTH","EXPANSION_AND_INTERNATIONALIZATION"])).optional(),
  "partner_privacy_policy": z.string().optional(),
  "responsibles": z.array(z.string()).optional()
}