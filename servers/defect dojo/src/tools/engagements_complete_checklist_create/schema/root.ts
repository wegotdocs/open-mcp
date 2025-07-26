import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this engagement."),
  "session_management": z.string().min(1).max(50).optional(),
  "encryption_crypto": z.string().min(1).max(50).optional(),
  "configuration_management": z.string().min(1).max(50).optional(),
  "authentication": z.string().min(1).max(50).optional(),
  "authorization_and_access_control": z.string().min(1).max(50).optional(),
  "data_input_sanitization_validation": z.string().min(1).max(50).optional(),
  "sensitive_data": z.string().min(1).max(50).optional(),
  "other": z.string().min(1).max(50).optional(),
  "session_issues": z.array(z.number().int()).optional(),
  "crypto_issues": z.array(z.number().int()).optional(),
  "config_issues": z.array(z.number().int()).optional(),
  "auth_issues": z.array(z.number().int()).optional(),
  "author_issues": z.array(z.number().int()).optional(),
  "data_issues": z.array(z.number().int()).optional(),
  "sensitive_issues": z.array(z.number().int()).optional(),
  "other_issues": z.array(z.number().int()).optional()
}