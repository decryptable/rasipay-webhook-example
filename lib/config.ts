export const config = {
  telegramChatIds: process.env.TELEGRAM_CHAT_IDS
    ? process.env.TELEGRAM_CHAT_IDS.split(",") // Ubah string jadi array
    : [],
  appName: process.env.APP_NAME || "RasiPay Webhook",
  appDescription: process.env.APP_DESCRIPTION || "Sistem webhook modern untuk notifikasi pembayaran via Telegram",
};
