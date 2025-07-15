import { z } from "zod"

export const inputParamsSchema = {
  "status_id": z.number().int().describe("The ID of this status").readonly().optional(),
  "status_type_id": z.number().int().describe("The status type ID set in the UI, the default values are `1` = Home, `2` = Travel, `3` = Custom and `4` = Office"),
  "people_id": z.number().int().describe("The ID of the person assigned to this status"),
  "status_name": z.string().max(200).describe("The name used for a custom status (`status_type_id` = `3`), all other types show the name as null").optional(),
  "start_date": z.string().describe("Start date of this status"),
  "end_date": z.string().describe("End date of this status"),
  "repeat_state": z.number().int().describe("Frequency that this status repeats. `0` = No repeat, `1` = Weekly, `2` = Monthly, `3` = Every two weeks, `4` = Every three weeks, `5` = Every six weeks, `6` = Every two months, `7` = Every three months, `8` = Every six months, `9` = Yearly").optional(),
  "repeat_end_date": z.string().describe("Date that the repeating status will cease").optional(),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified": z.string().describe("Date this record was modified").readonly().optional(),
  "created_by": z.number().int().describe("Account ID of person who created this status").readonly().optional(),
  "modified_by": z.number().int().describe("Account ID of person who last modified this status").readonly().optional()
}