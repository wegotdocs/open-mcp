import { z } from "zod"

export const inputParams = {
  "security_questions": z.array(z.object({ "question_id": z.number().int().describe("The ID representing the security question.").optional(), "response": z.string().min(3).max(17).describe("The security question response.").optional(), "security_question": z.string().describe("__Read-only__ The security question.").readonly().optional() }).strict().describe("Single security question and response object for POST operation.")).describe("Security questions and response objects.").optional()
}