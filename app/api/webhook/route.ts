import { NextRequest, NextResponse } from "next/server"
import { validateWebhookData, formatWebhookMessage } from "@/lib/validation"
import { sendTelegramMessage } from "@/lib/telegram"
import type { WebhookData } from "@/types/WebhookData"

/**
 * @swagger
 * /api/webhook:
 *   post:
 *     summary: Menerima data webhook dan mengirim notifikasi ke Telegram
 *     description: Endpoint ini menerima data webhook dalam format JSON, memvalidasi data, dan mengirim notifikasi ke Telegram.
 *     tags:
 *       - webhook
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WebhookData'
 *     responses:
 *       200:
 *         description: Webhook berhasil diproses
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       400:
 *         description: Data tidak valid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Terjadi kesalahan saat memproses webhook
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
export async function POST(request: Request) {
  try {
    // Parse JSON body
    const body = await request.json()

    // Validasi data webhook
    const validation = validateWebhookData(body)

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: validation.errors,
        },
        { status: 400 },
      )
    }

    // Konversi data ke tipe WebhookData
    const webhookData: WebhookData = {
      ...body,
      timestamp: new Date(body.timestamp),
    }

    // Format pesan untuk Telegram
    const message = formatWebhookMessage(webhookData)

    // Kirim notifikasi ke Telegram
    await sendTelegramMessage(message)

    // Catat log
    console.log(`Webhook diterima: ${JSON.stringify(webhookData)}`)

    // Kirim respons sukses
    return NextResponse.json({
      success: true,
      message: "Webhook berhasil diproses",
    })
  } catch (error) {
    console.error("Error saat memproses webhook:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat memproses webhook",
      },
      { status: 500 },
    )
  }
}

