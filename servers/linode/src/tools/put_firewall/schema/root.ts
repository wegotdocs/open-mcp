import { z } from "zod"

export const inputParams = {
  "label": z.string().regex(new RegExp("^[a-zA-Z]((?!--|__|\\.\\.)[a-zA-Z0-9-_.])+$")).min(3).max(32).describe("__Filterable__ The Firewall's label, for display purposes only.\n\nFirewall labels have the following constraints:\n\n  - Must begin and end with an alphanumeric character.\n  - May only consist of alphanumeric characters, hyphens (`-`), underscores (`_`) or periods (`.`).\n  - Cannot have two hyphens (`--`), underscores (`__`) or periods (`..`) in a row.\n  - Must be between 3 and 32 characters.\n  - Must be unique.").optional(),
  "status": z.enum(["enabled","disabled"]).describe("The status to be applied to this Firewall.\n\n - When a Firewall is first created its status is `enabled`.\n - Run the [Delete a firewall](https://techdocs.akamai.com/linode-api/reference/delete-firewall) operation to delete a Firewall.").optional(),
  "tags": z.array(z.string()).describe("__Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.").optional()
}