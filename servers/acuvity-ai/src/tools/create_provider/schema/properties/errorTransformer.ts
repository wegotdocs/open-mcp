import { z } from "zod"

export const inputParamsSchema = {
  "contentType": z.string().describe("The Content-Type to use when returning a formatted error.").optional(),
  "statusCode": z.number().int().describe("HTTP status code to return, instead of the classical one.").optional(),
  "template": z.string().describe("Go template to process and transform the error. The delimiters\nare << and >> to prevent collision with acuctl templating.\nThe template will be passed the following informations:\n\n- `.Messages`: a list of string containing the messages to return.\n- `.Code`: The original status code.\n- `.TransformedCode`: The transformed status code.\n- `.Action`: The policy decision action (ask or deny).\n\nAll the sprig text function are available.").optional()
}