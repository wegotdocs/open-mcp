import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the custom field"),
  "type": z.enum(["array","boolean","datetime","integer","number","string","monetary"]).describe("Type value    | Description\n------------- | -------------\narray         | An array of strings up to 255 characters, maximum size is 1000 elements\nboolean       | true or false\ndate          | String of format \"full-date\" (YYYY-MM-DD) from RFC-3339 (full-date)\ndatetime      | String of format \"date-time\" (YYYY-MM-DDTHH:MM:SSZ) from RFC-3339 (date-time)\ninteger       | Cardinal value of -2^31..2^31-1\nnumber        | Float value. It can take cardinal values also which are interpreted as float\nstring        | Regular string up to 255 characters\nmonetary      | A map of 3-letters currency code and amount, e.g. {\"currency\": \"EUR\", \"amount\": 25.30}\n"),
  "description": z.string().describe("The custom field description").optional(),
  "isUsed": z.boolean().describe("A flag to represent that the custom field is used on a record of the resource.").optional(),
  "additionalSchema": z.any().describe("Additional parameters which can be added according to type:\nParameter Name | Types         | Description\n-------------- | ------------- | -------------\nallowedValues  | string, array | List of allowed values\n").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}