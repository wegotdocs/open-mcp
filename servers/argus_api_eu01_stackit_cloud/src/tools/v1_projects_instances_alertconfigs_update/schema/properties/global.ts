import { z } from "zod"

export const inputParamsSchema = {
  "opsgenieApiKey": z.string().min(1).max(200).describe("Opsgenie api key\n`Additional Validators:`\n* should only include the characters: a-zA-Z0-9-").optional(),
  "opsgenieApiUrl": z.string().min(1).max(200).describe("Opsgenie api url\n`Additional Validators:`\n* must be a syntactically valid url address").optional(),
  "resolveTimeout": z.string().min(2).max(8).describe("ResolveTimeout is the default value used by alertmanager if the alert does not include EndsAt, after this time passes it can declare the alert as resolved if it has not been updated. This has no impact on alerts from Prometheus, as they always include EndsAt. \n`Additional Validators:`\n* must be a valid time format").optional(),
  "smtpAuthIdentity": z.string().min(1).max(200).describe("Auth identity.\n`Additional Validators:`\n* must be a syntactically valid email address").optional(),
  "smtpAuthPassword": z.string().min(1).max(200).describe("SMTP Auth using LOGIN and PLAIN.").optional(),
  "smtpAuthUsername": z.string().min(1).max(200).describe("SMTP Auth using CRAM-MD5, LOGIN and PLAIN. If empty, Alertmanager doesn't authenticate to the SMTP server.").optional(),
  "smtpFrom": z.string().min(1).max(200).describe("The default SMTP From header field. \n`Additional Validators:`\n* must be a syntactically valid email address").optional(),
  "smtpSmarthost": z.string().min(1).max(200).describe("The default SMTP smarthost used for sending emails, including port number. Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS). Example: smtp.example.org:587 \n`Additional Validators:`\n* should only include the characters: a-zA-Z0-9_./@&?:-").optional()
}