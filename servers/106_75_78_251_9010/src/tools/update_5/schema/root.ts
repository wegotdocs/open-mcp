import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "code": z.string(),
  "paramConverterType": z.enum(["NONE","JS","TEMPLATE"]),
  "jsParamConverter": z.string().optional(),
  "templateParamConverter": z.string().optional(),
  "responseConverterType": z.enum(["NONE","JS","TEMPLATE"]),
  "jsResponseConverter": z.string().optional(),
  "templateResponseConverter": z.string().optional()
}