import { z } from "zod"

export const inputParamsSchema = {
  "subject": z.string().describe("メールの件名").optional(),
  "price": z.number().int().gte(110).describe("価格（110円以上）").optional(),
  "html_body": z.string().describe("HTMLフォーマットのメール本文").optional(),
  "text_body": z.string().describe("テキストフォーマットのメール本文").optional(),
  "delivery_date": z.string().datetime({ offset: true }).describe("配信予定日時（現在より未来の日時、e.g. 2025-04-25T09:00:00.00+08:00 形式でタイムゾーン情報を含める）").optional(),
  "is_active": z.boolean().describe("有効/無効フラグ").optional()
}