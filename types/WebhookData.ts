export interface WebhookData {
  event: string
  amount: number
  sender: string
  newBalance: number
  paymentId: string
  timestamp: Date
}

