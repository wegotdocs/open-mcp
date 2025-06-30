import { z } from "zod"

export const inputParamsSchema = {
  "delimiter": z.enum([";",",","\t","|"]).describe("Sets the field delimiter of the CSV export").optional(),
  "list_separator": z.string().describe("Sets the separator character used for multivalued strings").optional(),
  "quote_all": z.boolean().describe("Set it to true to force quoting all strings, i.e. surrounding all strings with quote characters").optional(),
  "with_bom": z.boolean().describe("Set it to true to force the first characters of the CSV file to be a Unicode Byte Order Mask (0xFEFF). It usually makes Excel correctly open the output CSV file without warning.\n**Warning:** the default value of this parameter is `false` in v2.0 and `true` starting with v2.1").optional()
}