import { config } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { DeployButton } from "@/components/deploy-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black to-gray-800 text-white dark:from-gray-800 dark:to-gray-900 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {config.appName}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
              {config.appDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <DeployButton />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Fitur Utama
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassmorphicCard
                className="p-6"
                glowColor="rgba(255, 200, 0, 0.3)"
              >
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  Notifikasi Real-time
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Dapatkan notifikasi instan melalui Telegram setiap kali
                  webhook dipanggil.
                </p>
              </GlassmorphicCard>

              <GlassmorphicCard
                className="p-6"
                glowColor="rgba(0, 200, 255, 0.3)"
              >
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  Validasi Data
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Validasi otomatis untuk memastikan data webhook sesuai dengan
                  format yang diharapkan.
                </p>
              </GlassmorphicCard>

              <GlassmorphicCard
                className="p-6"
                glowColor="rgba(255, 100, 255, 0.3)"
              >
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  API Playground
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Uji webhook Anda dengan playground interaktif di halaman
                  dokumentasi.
                </p>
              </GlassmorphicCard>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Cara Kerja
            </h2>

            <div className="max-w-3xl mx-auto">
              <GlassmorphicCard
                className="p-8"
                glowColor="rgba(100, 200, 255, 0.2)"
              >
                <ol className="relative border-l border-gray-300 dark:border-gray-700">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-black text-white dark:bg-gray-800 rounded-full -left-4">
                      1
                    </span>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      Konfigurasi Bot Telegram
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Buat bot Telegram dan dapatkan token API. Tambahkan token
                      ke variabel lingkungan.
                    </p>
                  </li>

                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-black text-white dark:bg-gray-800 rounded-full -left-4">
                      2
                    </span>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      Konfigurasi Chat ID
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tambahkan ID chat Telegram Anda ke file konfigurasi untuk
                      menerima notifikasi.
                    </p>
                  </li>

                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-black text-white dark:bg-gray-800 rounded-full -left-4">
                      3
                    </span>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      Deploy Aplikasi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deploy aplikasi ke server Anda dan dapatkan URL endpoint
                      webhook.
                    </p>
                  </li>

                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-black text-white dark:bg-gray-800 rounded-full -left-4">
                      4
                    </span>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      Terima Notifikasi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Setiap kali webhook dipanggil, Anda akan menerima
                      notifikasi di Telegram.
                    </p>
                  </li>
                </ol>
              </GlassmorphicCard>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
