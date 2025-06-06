import { z } from "zod"

export const inputParamsSchema = {
  "resultid": z.union([z.string(), z.null()]).describe("The unique identifier for the consultation in our system.").optional(),
  "lang": z.string().describe("Target language for the notes. It may be different from the language of the audio. If it is indeed different, we will translate the transcription and the notes to the target language."),
  "langCult": z.string().describe("Target language culture for the notes.").optional(),
  "country": z.string().describe("Country of the consultation.").optional(),
  "specialty": z.string().describe("Specialty of the consultation.").optional(),
  "subSpecialty": z.string().describe("Optional sub specialty. If not specified, the specialty will be used.").optional(),
  "subSubSpecialty": z.string().describe("Optional sub sub specialty.").optional(),
  "consultationType": z.enum(["","background","firstVisit","followUp"]).describe("Type of consultation.").optional(),
  "initialContext": z.union([z.string(), z.null()]).describe("Optional initial context.").optional(),
  "isMulti": z.boolean().describe("If it is a multi-consultation visit, i.e. a visit with multiple cosultation reasons.").optional(),
  "contentType": z.string().describe("The content type of the file. Refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of available MIME Types."),
  "errorCode": z.union([z.enum(["api","llm","transcription","censor_filter","consultation_too_short","unknown","building_pipeline","rate_limit","coding"]).describe("Error code enum."), z.null()]).describe("You can force and error by informing the error code here. This is useful for testing the error handling in your application.").optional(),
  "tags": z.union([z.record(z.any()), z.null()]).describe("For internal use only.").optional()
}