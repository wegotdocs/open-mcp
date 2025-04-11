import { z } from "zod"

export const inputParams = {
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ The date this StackScript was created.").readonly().optional(),
  "deployments_active": z.number().int().describe("__Read-only__ Count of currently active, deployed Linodes created from this StackScript.").readonly().optional(),
  "deployments_total": z.number().int().describe("__Filterable__, __Read-only__ The total number of times this StackScript has been deployed.").readonly().optional(),
  "description": z.string().describe("__Filterable__ A description for the StackScript.").optional(),
  "id": z.number().int().describe("__Read-only__ The unique ID of this StackScript.").readonly().optional(),
  "images": z.array(z.string()).describe("An array of Image IDs. These are the Images that can be deployed with this StackScript.\n\n`any/all` indicates that all available Images, including private Images, are accepted.").optional(),
  "is_public": z.boolean().describe("__Filterable__ This determines whether other users can use your StackScript. __Once a StackScript is made public, it cannot be made private.__").optional(),
  "label": z.string().min(3).max(128).describe("__Filterable__ The StackScript's label is for display purposes only.").optional(),
  "mine": z.boolean().describe("__Filterable__, __Read-only__ Returns `true` if this StackScript is owned by the account of the user making the request, and the user making the request is unrestricted or has access to this StackScript.").readonly().optional(),
  "rev_note": z.string().describe("__Filterable__ This field allows you to add notes for the set of revisions made to this StackScript.").optional(),
  "script": z.string().describe("The script to execute when provisioning a new Linode with this StackScript.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ The date this StackScript was last updated.").readonly().optional(),
  "user_defined_fields": z.array(z.object({ "default": z.string().describe("__Read-only__ The default value.  If not specified, this value will be used.").readonly().optional(), "example": z.string().describe("__Read-only__ An example value for the field.").readonly(), "label": z.string().describe("__Read-only__ A human-readable label for the field that will serve as the input prompt for entering the value during deployment.").readonly(), "manyOf": z.string().describe("__Read-only__ A list of acceptable values for the field in any quantity, combination or order.").readonly().optional(), "name": z.string().describe("__Read-only__ The name of the field.").readonly(), "oneOf": z.string().describe("__Read-only__ A list of acceptable single values for the field.").readonly().optional() }).strict().describe("A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.")).describe("__Read-only__ This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](https://www.linode.com/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.").readonly().optional(),
  "user_gravatar_id": z.string().describe("__Read-only__ The Gravatar ID for the User who created the StackScript.").readonly().optional(),
  "username": z.string().describe("__Read-only__ The User who created the StackScript.").readonly().optional()
}