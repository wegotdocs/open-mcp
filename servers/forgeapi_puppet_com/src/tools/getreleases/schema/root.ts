import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(100).describe("The numbers of items to return per page").optional(),
  "offset": z.number().int().gte(0).describe("The number of items to skip before starting to collect the result set").optional(),
  "sort_by": z.enum(["downloads","release_date","module"]).describe("Desired order in which to return results\n").optional(),
  "module": z.string().describe("Constrain results to releases for a given module").optional(),
  "owner": z.string().describe("Constrain results to releases for any modules owned by the given user").optional(),
  "with_pdk": z.boolean().describe("Constrain results to module releases created with\n[Puppet Development Kit](https://puppet.com/docs/pdk/latest/pdk.html)\n").optional(),
  "operatingsystem": z.string().describe("Constrain results to module releases that explicitly support the given operating system, see\n[metadata.json documentation](https://puppet.com/docs/puppet/latest/modules_metadata.html#specifying-operating-system-compatibility) for more information about possible values\n").optional(),
  "operatingsystemrelease": z.string().describe("Constrain results to module releases that explicitly support the\ngiven release of the given operating system, see [metadata.json\ndocumentation](https://puppet.com/docs/puppet/latest/modules_metadata.html#specifying-operating-system-compatibility)\nfor more information about possible values. Requires `operatingsystem`.\n").optional(),
  "pe_requirement": z.string().describe("Constrain results to module releases that explicitly list a Puppet Enterprise version requirement in the given\n[semantic versioning range](https://puppet.com/docs/puppet/latest/modules_metadata.html#specifying-versions)\n").optional(),
  "puppet_requirement": z.string().describe("Constrain results to module releases that explicitly list a Puppet version requirement in the given\n[semantic versioning range](https://puppet.com/docs/puppet/latest/modules_metadata.html#specifying-versions)\n").optional(),
  "module_groups": z.array(z.enum(["base","pe_only"])).describe("Constrain results to releases for modules in any of the given module groups").optional(),
  "show_deleted": z.boolean().describe("Include releases marked as \"deleted\" in results").optional(),
  "hide_deprecated": z.boolean().describe("Exclude releases of deprecated modules from the results. Treats any value as true.").optional(),
  "hide_contribution": z.boolean().describe("Exclude releases of modules seeking contribution from the results. Treats any value as true.").optional(),
  "with_html": z.boolean().describe("Render markdown files (README, REFERENCE, etc.) to HTML before returning results").optional(),
  "include_fields": z.array(z.string()).describe("List of top level keys to include in response object, only applies to fields marked 'optional'").optional(),
  "exclude_fields": z.array(z.string()).describe("List of top level keys to exclude from response object").optional(),
  "supported": z.boolean().describe("Constrain results to releases for [Supported modules](https://forge.puppet.com/supported)\n").optional(),
  "If-Modified-Since": z.string().describe("Only processes the request if the resource or list of resources has changed since the given time,\notherwise returns a `304 Not Modified` response\n").optional()
}