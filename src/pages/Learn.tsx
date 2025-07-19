import Navbar from "../components/Navbar";

export default function Learn() {
  return (
    <div className="min-h-screen w-screen pt-20 bg-white px-6 py-12 mx-auto text-black">
      <Navbar />
      <h2 className="text-3xl font-semibold mb-6">What is Encryption?</h2>
      <p className="mb-4 text-gray-700">
        Encryption is a method of converting information into a secret code to
        prevent unauthorized access. It helps protect your data from hackers,
        spies, or even accidental exposure.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-2">Types of Encryption</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Caesar Cipher:</strong> One of the oldest encryption methods
          where letters are shifted by a set amount.
        </li>
        <li>
          <strong>Key-based Encryption:</strong> A password is used to encrypt
          and decrypt the message securely.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-2">Why It Matters</h3>
      <p className="text-gray-700">
        Encryption is used everywhere — in WhatsApp messages, websites with
        HTTPS, banking apps, and more. Understanding it helps you stay safe
        online.
      </p>
    </div>
  );
}
