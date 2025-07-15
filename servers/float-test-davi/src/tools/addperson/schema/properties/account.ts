import { z } from "zod"

export const inputParamsSchema = {
  "account_id": z.number().int().describe("The ID of this account").readonly().optional(),
  "name": z.string().max(200).describe("The name of the account"),
  "email": z.string().max(200).describe("Email address for this account"),
  "timezone": z.string().describe("Timezone as a TZ identifier, set when using the time logging timer function").optional(),
  "avatar": z.string().url().describe("URL of an image file representing the account as an avatar").optional(),
  "account_type": z.number().int().describe("High level permissions of the account; `1` = Account Owner, `2` = Admin, `4` = Member, `5` = Billing, `7` = Manager").optional(),
  "access": z.number().int().describe("Used in conjunction with `account_type` to determine granular permissions, see response description").optional(),
  "department_filter_id": z.number().int().describe("The department ID if this account is filtered by a department").optional(),
  "view_rights": z.number().int().describe("(**Deprecated** - see `access`) Do they have rights to view the team? `1` = Yes, `0` = No").optional(),
  "edit_rights": z.number().int().describe("(**Deprecated** - see `access`) If a Member, do they have rights to edit their schedule? `1` = Yes, `0` = No").optional(),
  "active": z.number().int().describe("Is this account active? `1` = Yes, `0` = No").optional(),
  "created": z.string().describe("Date time this record was created").readonly().optional(),
  "modified": z.string().describe("Date time this record was last modified").readonly().optional()
}