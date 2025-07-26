import { z } from "zod"

export const inputParamsSchema = {
  "product": z.number().int().nullable().optional(),
  "user": z.number().int().nullable().optional(),
  "product_type_added": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "product_added": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "engagement_added": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "test_added": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "scan_added": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "jira_update": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "upcoming_engagement": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "stale_engagement": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "auto_close_engagement": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "close_engagement": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "user_mentioned": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "code_review": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "review_requested": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "other": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "sla_breach": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "sla_breach_combined": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "risk_acceptance_expiration": z.array(z.enum(["slack","msteams","mail","webhooks","alert"]).describe("* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert")).optional(),
  "template": z.boolean().optional(),
  "scan_added_empty": z.enum(["slack","msteams","mail","webhooks","alert",""]).describe("Triggered whenever an (re-)import has been done (even if that created/updated/closed no findings).\n\n* `slack` - slack\n* `msteams` - msteams\n* `mail` - mail\n* `webhooks` - webhooks\n* `alert` - alert").optional()
}