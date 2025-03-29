export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white dark:bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} <span className="font-medium">RasiPay Webhook</span>. Dibuat dengan ❤️ oleh{" "}
              <span className="font-medium">decryptable</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

