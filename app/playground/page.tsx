import { getApiDocs } from "@/lib/swagger";
import ReactSwagger from "./react-swagger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function ApiDoc() {
  const spec = getApiDocs();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          API Documentation
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <ReactSwagger spec={spec} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
