import { config } from "@/lib/config"

export async function sendTelegramMessage(message: string): Promise<void> {
  const botToken = process.env.BOT_TOKEN

  if (!botToken) {
    console.error("BOT_TOKEN tidak ditemukan di environment variables")
    return
  }

  try {
    await Promise.all(
      config.telegramChatIds.map(async (chatId) => {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          console.error(`Gagal mengirim pesan ke Telegram: ${JSON.stringify(errorData)}`)
        }
      }),
    )
  } catch (error) {
    console.error("Error saat mengirim pesan ke Telegram:", error)
  }
}

