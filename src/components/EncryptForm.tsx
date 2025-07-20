import { useState } from "react";
import {
  caesarEncrypt,
  caesarDecrypt,
  keyEncrypt,
  keyDecrypt,
} from "../utils/encryptionUtils";
import { motion } from "framer-motion";
import { FaLock, FaUnlock, FaKey, FaRandom } from "react-icons/fa";
import { MdOutlineSwapHoriz } from "react-icons/md";
import Navbar from "./Navbar";

const EncryptForm = () => {
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [method, setMethod] = useState<"caesar" | "key">("caesar");
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (!text) return;

    if (method === "caesar") {
      if (mode === "encrypt") {
        setResult(caesarEncrypt(text, shift));
      } else {
        setResult(caesarDecrypt(text, shift));
      }
    } else {
      if (mode === "encrypt") {
        setResult(keyEncrypt(text, key));
      } else {
        setResult(keyDecrypt(text, key));
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-white  dark:bg-gray-900 p-6 rounded-2xl shadow-xl space-y-6"
    >
      <Navbar />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Encryption Tool{method}
        </h2>
        <button
          onClick={() => setMode(mode === "encrypt" ? "decrypt" : "encrypt")}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition"
        >
          <MdOutlineSwapHoriz className="text-lg" />
          <span>
            {mode === "encrypt" ? "Switch to Decrypt" : "Switch to Encrypt"}
          </span>
        </button>
      </div>

      <textarea
        className="w-full h-28 p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        placeholder="Enter your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex items-center gap-4">
        <button
          onClick={() => setMethod("caesar")}
          className={`flex-1 py-2 rounded-lg text-center ${
            method === "caesar"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          <FaRandom className="inline mr-2" />
          Caesar Cipher
        </button>
        <button
          onClick={() => setMethod("key")}
          className={`flex-1 py-2 rounded-lg text-center ${
            method === "key"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          <FaKey className="inline mr-2" />
          Key Encryption
        </button>
      </div>

      {method === "caesar" ? (
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Shift Amount
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
          />
        </div>
      ) : (
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Encryption Key
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
      )}

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        {mode === "encrypt" ? <FaLock /> : <FaUnlock />}
        {mode === "encrypt" ? "Encrypt" : "Decrypt"}
      </motion.button>

      {result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 bg-green-50 dark:bg-green-900 p-4 rounded-lg text-green-800 dark:text-green-100 break-words"
        >
          <strong>Result:</strong> {result}
        </motion.div>
      )}
    </motion.div>
  );
};

export default EncryptForm;
