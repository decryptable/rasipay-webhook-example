import type { WebhookData } from "@/types/WebhookData"

export function validateWebhookData(data: any): { valid: boolean; errors?: string[] } {
  const errors: string[] = []

  // Validasi tipe data
  if (typeof data.event !== "string") errors.push("event harus berupa string")
  if (typeof data.amount !== "number") errors.push("amount harus berupa angka")
  if (typeof data.sender !== "string") errors.push("sender harus berupa string")
  if (typeof data.newBalance !== "number") errors.push("newBalance harus berupa angka")
  if (typeof data.paymentId !== "string") errors.push("paymentId harus berupa string")

  // Validasi timestamp
  if (!data.timestamp || isNaN(new Date(data.timestamp).getTime())) {
    errors.push("timestamp harus berupa tanggal yang valid")
  }

  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  }
}

export function formatWebhookMessage(data: WebhookData): string {
  const formattedDate = new Date(data.timestamp).toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "medium",
  })

  return `
<b>🔔 Notifikasi Pembayaran Baru</b>

<b>Event:</b> ${data.event}
<b>ID Pembayaran:</b> ${data.paymentId}
<b>Pengirim:</b> ${data.sender}
<b>Jumlah:</b> Rp ${data.amount.toLocaleString("id-ID")}
<b>Saldo Baru:</b> Rp ${data.newBalance.toLocaleString("id-ID")}
<b>Waktu:</b> ${formattedDate}
`
}

