import EncryptForm from "../components/EncryptForm";

const Tool = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-blue-200 text-gray-800 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">🔐 Encryption Playground</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn about how encryption works and try it yourself! Choose from
          Caesar Cipher or Password-based encryption.
        </p>
      </header>

      <main className="flex justify-center">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
          <EncryptForm />
        </div>
      </main>

      <footer className="text-center mt-10 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Encryption Playground. All rights
        reserved.
      </footer>
    </div>
  );
};
export default Tool;
