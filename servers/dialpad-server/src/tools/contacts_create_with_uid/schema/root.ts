import { z } from "zod"

export const inputParamsSchema = {
  "company_name": z.string().nullable().describe("[single-line only]\n\nThe contact's company name.").optional(),
  "emails": z.array(z.string()).nullable().describe("The contact's emails.\n\nThe first email in the list is the contact's primary email.").optional(),
  "extension": z.string().nullable().describe("The contact's extension number.").optional(),
  "first_name": z.string().nullable().describe("[single-line only]\n\nThe contact's first name."),
  "job_title": z.string().nullable().describe("[single-line only]\n\nThe contact's job title.").optional(),
  "last_name": z.string().nullable().describe("[single-line only]\n\nThe contact's last name."),
  "phones": z.array(z.string()).nullable().describe("The contact's phone numbers.\n\nThe phone number must be in e164 format. The first number in the list is the contact's primary phone.").optional(),
  "trunk_group": z.string().nullable().describe("[Deprecated]").optional(),
  "uid": z.string().nullable().describe("The unique id to be included as part of the contact's generated id."),
  "urls": z.array(z.string()).nullable().describe("A list of websites associated with or belonging to this contact.").optional()
}