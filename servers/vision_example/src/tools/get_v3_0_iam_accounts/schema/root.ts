import { z } from "zod"

export const inputParamsSchema = {
  "top": z.union([z.literal(50), z.literal(100), z.literal(200)]).describe("Number of records displayed on a page.").optional(),
  "TMV1-Filter": z.string().max(256).describe("Filter for retrieving a subset of the retrieved user list.\n\nSupported fields:\n\n|Field|Description|\n|---------|---------|\n|`id`     |The unique identifier of a user.|\n|`email`  |The email address of a user|\n|`authType` |The type of the user account. Available values: `local`, `saml`, `samlGroup`|\n|`status` |The status of an account. Available values: `enabled`, `disabled`, `invited`|\n\nSupported operators:\n\n|Operator|Description|\n|-----|-----------|\n|`eq`|Operator 'equal to'|\n|`and`|Operator 'and'|\n|`or`|Operator 'or'|\n|`not`|Operator 'not'|\n").optional()
}