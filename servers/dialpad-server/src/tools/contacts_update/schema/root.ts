import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The contact's id."),
  "company_name": z.string().nullable().describe("[single-line only]\n\nThe contact's company name.").optional(),
  "emails": z.array(z.string()).nullable().describe("The contact's emails.\n\nThe first email in the list is the contact's primary email.").optional(),
  "extension": z.string().nullable().describe("The contact's extension number.").optional(),
  "first_name": z.string().nullable().describe("[single-line only]\n\nThe contact's first name.").optional(),
  "job_title": z.string().nullable().describe("[single-line only]\n\nThe contact's job title.").optional(),
  "last_name": z.string().nullable().describe("[single-line only]\n\nThe contact's last name.").optional(),
  "phones": z.array(z.string()).nullable().describe("The contact's phone numbers.\n\nThe phone number must be in e164 format. The first number in the list is the contact's primary phone.").optional(),
  "trunk_group": z.string().nullable().describe("[Deprecated]").optional(),
  "urls": z.array(z.string()).nullable().describe("A list of websites associated with or belonging to this contact.").optional()
}