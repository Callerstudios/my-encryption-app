import { useState } from "react";
import {
  caesarEncrypt,
  caesarDecrypt,
  keyEncrypt,
  keyDecrypt,
} from "./encryptor";

function App() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [key, setKey] = useState("");
  const [type, setType] = useState<"caesar" | "key">("caesar");
  const [action, setAction] = useState<"encrypt" | "decrypt">("encrypt");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    let output = "";
    if (type === "caesar") {
      output =
        action === "encrypt"
          ? caesarEncrypt(text, shift)
          : caesarDecrypt(text, shift);
    } else {
      output =
        action === "encrypt" ? keyEncrypt(text, key) : keyDecrypt(text, key);
    }
    setResult(output);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 500 }}>
      <h2>🛡️ Simple Encrypt/Decrypt Tool</h2>
      <label>
        🔤 Text:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      </label>

      <label>
        ⚙️ Mode:
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "caesar" | "key")}
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <option value="caesar">Caesar Cipher (Shift)</option>
          <option value="key">Encryption with Key</option>
        </select>
      </label>

      {type === "caesar" ? (
        <label>
          🔁 Shift Amount:
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </label>
      ) : (
        <label>
          🔑 Encryption Key:
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </label>
      )}

      <label>
        🔄 Action:
        <div style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="radio"
              name="action"
              value="encrypt"
              checked={action === "encrypt"}
              onChange={() => setAction("encrypt")}
            />
            Encrypt
          </label>{" "}
          <label>
            <input
              type="radio"
              name="action"
              value="decrypt"
              checked={action === "decrypt"}
              onChange={() => setAction("decrypt")}
            />
            Decrypt
          </label>
        </div>
      </label>

      <button onClick={handleSubmit} style={{ marginBottom: "1rem" }}>
        Run
      </button>

      {result && (
        <div>
          <h3>🔍 Result:</h3>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "1rem",
              borderRadius: "6px",
            }}
          >
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
