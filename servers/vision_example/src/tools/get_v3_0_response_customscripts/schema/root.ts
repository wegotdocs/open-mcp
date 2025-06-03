import { z } from "zod"

export const inputParamsSchema = {
  "filter": z.string().max(2048).describe("Filter for retrieving a subset of the custom scripts list. Supported fields and operators:\n* 'fileName' - File name of a custom script \n* 'fileType' - File extension of a custom script\n* 'eq' - Abbreviation of the operator \"equal to\"\n* 'and' - Operator \"and\"\n* 'or' - Operator \"or\"\n* 'not' - Operator \"not\"\n* '( )' - Symbols for grouping operands with their correct operator.\n").optional()
}