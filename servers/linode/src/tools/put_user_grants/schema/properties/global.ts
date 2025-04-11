import { z } from "zod"

export const inputParams = {
  "account_access": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to Account-level actions, like billing information. A restricted User will never be able to manage users.\n\n__Parent and child accounts__\n\nIn a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, this grant can be added to a child account user, to give the user `read-write` access. This gives the child user unrestricted access to expected management operations, such as creating other child users. However, child users don't have write access to billing operations. The API issues a specific error message if a write operation is attempted by a child user.").optional(),
  "add_databases": z.boolean().describe("If `true`, this User may add Managed Databases.").optional(),
  "add_domains": z.boolean().describe("If `true`, this User may add Domains.").optional(),
  "add_firewalls": z.boolean().describe("If `true`, this User may add Firewalls.").optional(),
  "add_images": z.boolean().describe("If `true`, this User may add Images.").optional(),
  "add_linodes": z.boolean().describe("If `true`, this User may create Linodes.").optional(),
  "add_longview": z.boolean().describe("If `true`, this User may create Longview clients and view the current plan.").optional(),
  "add_nodebalancers": z.boolean().describe("If `true`, this User may add NodeBalancers.").optional(),
  "add_stackscripts": z.boolean().describe("If `true`, this User may add StackScripts.").optional(),
  "add_volumes": z.boolean().describe("If `true`, this User may add Volumes.").optional(),
  "add_vpcs": z.boolean().describe("If `true`, this User may add VPCs.").optional(),
  "cancel_account": z.boolean().describe("If `true`, this User may cancel the entire Account.").optional(),
  "child_account_access": z.boolean().nullable().describe("In a [parent and child account](https://www.linode.com/docs/guides/parent-child-accounts/) environment, this gives a parent account access to endpoints that can be used to manage child accounts. Unrestricted parent account users have access to this grant, while restricted parent users don't. An unrestricted parent user can set this to `true` to add this grant to a restricted parent user. Displayed as `null` for all non-parent accounts.").optional(),
  "longview_subscription": z.boolean().describe("If `true`, this User may manage the Account's Longview subscription.").optional()
}