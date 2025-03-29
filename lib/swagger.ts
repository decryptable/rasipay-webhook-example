import { createSwaggerSpec } from "next-swagger-doc"

export const getApiDocs = () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api", // Lokasi API routes
    definition: {
      openapi: "3.0.0",
      info: {
        title: "RasiPay Webhook API",
        version: "1.0.0",
        description: "API dokumentasi untuk RasiPay Webhook",
        contact: {
          name: "Support",
          url: "https://github.com/decryptable/rasipay-webhook-example",
        },
      },
      servers: [
        {
          url: process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000",
          description: "Server API",
        },
      ],
      tags: [
        {
          name: "webhook",
          description: "Operasi webhook",
        },
      ],
      components: {
        schemas: {
          WebhookData: {
            type: "object",
            required: ["event", "amount", "sender", "newBalance", "paymentId", "timestamp"],
            properties: {
              event: {
                type: "string",
                description: 'Jenis event, misalnya "payment_received"',
                example: "payment_received",
              },
              amount: {
                type: "number",
                description: "Jumlah pembayaran",
                example: 150000,
              },
              sender: {
                type: "string",
                description: "ID atau nama pengirim",
                example: "user123",
              },
              newBalance: {
                type: "number",
                description: "Saldo baru setelah transaksi",
                example: 500000,
              },
              paymentId: {
                type: "string",
                description: "ID unik untuk pembayaran",
                example: "pay_123456789",
              },
              timestamp: {
                type: "string",
                format: "date-time",
                description: "Waktu transaksi dalam format ISO 8601",
                example: "2023-06-15T08:30:00.000Z",
              },
            },
          },
          SuccessResponse: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
                example: true,
              },
              message: {
                type: "string",
                example: "Webhook berhasil diproses",
              },
            },
          },
          ErrorResponse: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
                example: false,
              },
              message: {
                type: "string",
                example: "Data tidak valid",
              },
              errors: {
                type: "array",
                items: {
                  type: "string",
                },
                example: ["amount harus berupa angka", "timestamp harus berupa tanggal yang valid"],
              },
            },
          },
        }
      },
    },
  })
  return spec
}

