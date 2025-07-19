import Navbar from "../components/Navbar";
import whatIsEncryptionImage from "../assets/images/what-is-encryption.png";
import dataFlowImage from "../assets/images/data-flow-before-and-after-encryption.png";
import symmetricVsAsymmetricImage from "../assets/images/symmetric-vs-asymmetric.png";
import encryptedMessagingImage from "../assets/images/encryption-in-messaging-apps.png";
import httpsLockImage from "../assets/images/https-lock-browser.png";
import caesarCipherWheelImage from "../assets/images/caesar-cipher-wheel.png";

export default function Learn() {
  return (
    <div className="min-h-screen w-screen pt-20 bg-white px-6 py-12 mx-auto text-black">
      <Navbar />

      <h2 className="text-4xl font-bold mb-6 text-center">
        What is Encryption?
      </h2>
      <img
        src={whatIsEncryptionImage}
        alt="What is Encryption"
        className="w-full max-w-md mx-auto my-6 rounded-md shadow"
      />
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        Encryption is the process of converting data into a coded form to
        prevent unauthorized access. Only someone with the correct decryption
        key can revert it back to readable form. It's a cornerstone of digital
        security and privacy.
      </p>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">How Does It Work?</h3>
        <img
          src={dataFlowImage}
          alt="Data Flow Diagram"
          className="w-full max-w-md mx-auto my-6 rounded-md shadow"
        />
        <p className="text-gray-700 leading-relaxed">
          Encryption uses algorithms and keys. The algorithm is a set of rules
          or a formula, and the key is like a password that locks or unlocks the
          data. If someone intercepts encrypted data without the key, it appears
          as gibberish.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">Types of Encryption</h3>
        <img
          src={symmetricVsAsymmetricImage}
          alt="Symmetric vs Asymmetric Encryption"
          className="w-full max-w-md mx-auto my-6 rounded-md shadow"
        />
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>
            <strong>Caesar Cipher:</strong> A substitution cipher that shifts
            letters of the alphabet by a fixed number.
          </li>
          <li>
            <strong>Symmetric Encryption:</strong> The same key is used to
            encrypt and decrypt. Examples: AES, DES.
          </li>
          <li>
            <strong>Asymmetric Encryption:</strong> Uses a public key to encrypt
            and a private key to decrypt. Example: RSA.
          </li>
          <li>
            <strong>Hashing:</strong> One-way encryption that cannot be
            reversed. Often used for storing passwords securely.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">Why Encryption Matters</h3>
        <img
          src={encryptedMessagingImage}
          alt="Encrypted Messaging Apps"
          className="w-full max-w-md mx-auto my-6 rounded-md shadow"
        />
        <p className="text-gray-700 leading-relaxed">
          Encryption helps protect sensitive data from unauthorized access. It's
          used in:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>Secure messaging apps like WhatsApp and Signal</li>
          <li>Banking and online payment systems</li>
          <li>Secure websites using HTTPS</li>
          <li>Cloud storage platforms</li>
          <li>Email encryption and password managers</li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">Real-World Example</h3>
        <img
          src={httpsLockImage}
          alt="HTTPS Lock in Browser"
          className="w-full max-w-md mx-auto my-6 rounded-md shadow"
        />
        <p className="text-gray-700 leading-relaxed mb-2">
          When you visit a website with a URL that starts with{" "}
          <code>https://</code>, your connection is encrypted using SSL/TLS.
          This ensures that any data you send (like passwords or credit card
          info) is protected from hackers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Similarly, when you send a message on WhatsApp, it gets encrypted
          using the Signal Protocol, so even WhatsApp cannot read your messages.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">
          Try It Yourself: Caesar Cipher
        </h3>
        <img
          src={caesarCipherWheelImage}
          alt="Caesar Cipher Wheel"
          className="w-full max-w-md mx-auto my-6 rounded-md shadow"
        />
        <p className="text-gray-700 leading-relaxed mb-2">
          Caesar Cipher is one of the simplest encryption techniques. Try
          encrypting the word <strong>"HELLO"</strong> with a shift of 3.
        </p>
        <p className="text-gray-700">
          Encrypted: <code>KHOOR</code>
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">
          Common Encryption Algorithms
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>
            <strong>AES (Advanced Encryption Standard):</strong> Used in
            government and military data security.
          </li>
          <li>
            <strong>RSA:</strong> A public-key encryption used in secure data
            transmission.
          </li>
          <li>
            <strong>SHA (Secure Hash Algorithm):</strong> Used for data
            integrity, not reversible.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Encryption keeps our digital lives secure. From private chats to bank
          transfers, it plays a vital role in privacy and protection.
          Understanding even the basics can help you make safer decisions
          online.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-4">Mini Quiz</h3>
        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-2">
          <li>
            What is the difference between symmetric and asymmetric encryption?
          </li>
          <li>What encryption method does WhatsApp use?</li>
          <li>
            What happens if someone intercepts encrypted data without the key?
          </li>
        </ol>
      </section>
    </div>
  );
}
