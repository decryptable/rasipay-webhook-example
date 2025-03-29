import { type NextRequest, NextResponse } from "next/server"
import { createLogger } from "./logger"

const logger = createLogger("rate-limit")

// Menyimpan request dan timestamp
const requestMap = new Map<string, number[]>()

interface RateLimitConfig {
  windowMs: number // Jendela waktu dalam milidetik
  max: number // Jumlah request maksimum dalam jendela waktu
}

export async function withRateLimit(
  request: NextRequest,
  handler: (request: NextRequest) => Promise<NextResponse>,
  { windowMs, max }: RateLimitConfig,
): Promise<NextResponse> {
  // Mendapatkan IP address
  const ip = request.headers.get("x-forwarded-for") || "unknown"

  // Mendapatkan waktu saat ini
  const now = Date.now()

  // Mendapatkan timestamps untuk IP ini
  const timestamps = requestMap.get(ip) || []

  // Menghapus timestamps yang sudah lewat dari jendela waktu
  const validTimestamps = timestamps.filter((timestamp) => now - timestamp < windowMs)

  // Jika jumlah request melebihi batas, kirim response 429
  if (validTimestamps.length >= max) {
    logger.warn(`Rate limit exceeded for IP: ${ip}`)
    return NextResponse.json({ success: false, message: "Too many requests, please try again later" }, { status: 429 })
  }

  // Tambahkan timestamp saat ini ke daftar
  validTimestamps.push(now)
  requestMap.set(ip, validTimestamps)

  // Lanjutkan ke handler
  return handler(request)
}

