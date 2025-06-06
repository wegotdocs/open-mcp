import { z } from "zod"

export const inputParamsSchema = {
  "result_id": z.string(),
  "lang": z.string().describe("The language of the consultation to generate the notes."),
  "langCult": z.string().describe("The language culture of the consultation to generate the notes."),
  "specialty": z.string().describe("The specialty of the consultation to generate the notes."),
  "subSpecialty": z.string().describe("The subspecialty of the consultation to generate the notes."),
  "subSubSpecialty": z.string().describe("The subsubspecialty of the consultation to generate the notes."),
  "isMulti": z.boolean().describe("Whether the consultation is a multi-consultation visit."),
  "consultationType": z.enum(["","background","firstVisit","followUp"]).describe("The type of consultation to generate the notes."),
  "userRole": z.string().describe("The role of the user who is generating the notes.")
}