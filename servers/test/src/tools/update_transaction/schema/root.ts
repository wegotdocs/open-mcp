import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "id": z.number().int(),
  "operations": z.array(z.object({ "transaction_id": z.number(), "object_id": z.number(), "amount": z.string().describe("'operations.*.deb_acc' => ['required', 'numeric',\nRule::exists('accounting_accounts', 'id')\n->whereNotNull('parent_id')\n],\n'operations.*.cre_acc' => ['required', 'numeric', 'different:transaction_debet_id',\nRule::exists('accounting_accounts', 'id')\n->whereNotNull('parent_id')\n],"), "document": z.union([z.string(), z.null()]).optional(), "date": z.union([z.string(), z.null()]).optional(), "currency": z.union([z.string(), z.null()]).optional(), "course": z.union([z.string(), z.null()]).optional(), "description": z.union([z.string(), z.null()]).optional(), "connection": z.union([z.string(), z.null()]).optional(), "unit_amount": z.union([z.string(), z.null()]).optional() }))
}