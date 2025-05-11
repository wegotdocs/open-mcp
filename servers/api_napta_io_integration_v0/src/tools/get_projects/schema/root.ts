import { z } from "zod"

export const inputParamsSchema = {
  "pagination[cursor]": z.union([z.string().min(1), z.null()]).describe("Identifier of the next item to fetch").optional(),
  "pagination[limit]": z.number().int().gte(1).lte(500).describe("Maximum number of items to fetch").optional(),
  "id.napta_id[eq]": z.union([z.number().int().gt(0), z.null()]).describe("Filter on Napta identifier of the Project").optional(),
  "id.napta_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple Napta identifier of the Projects, comma separated").optional(),
  "id.external_id[eq]": z.union([z.string().min(1), z.null()]).describe("Filter on unique reference of the Project (see [External Ids](#tag/External-Ids)).").optional(),
  "id.external_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple unique reference of the Projects, comma separated (see [External Ids](#tag/External-Ids)).").optional(),
  "text_fields[{field_name}][in]": z.union([z.record(z.array(z.union([z.string(), z.null()]))), z.null()]).describe("Filter on multiple values of a custom text field of the Project. {field_name} must be replaced by the name of the custom text field. All values must be comma separated without space character. If the value contains a comma, just escape the comma with a backslash (\\,). To filter on null value, pass the encoded null ASCII value (%00). To filter on multiple different text fields, you can provide this parameter multiple time (ex: text_fields[my_field_name][in]=value1,value2&text_fields[my_field_name2][in]=value3,value4). In this case, an 'and' filter will be applied between the different fields.").optional()
}