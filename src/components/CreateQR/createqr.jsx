import React, { useState } from "react";
import QrCode from "qrcode";
import DataSelect from "./dataselection";

function CreateQR() {
  const [src, setSrc] = useState("");
  const [content, setContent] = useState("");

  const createQrCodeFromText = () => {
    if (content !== "") {
      QrCode.toDataURL(content).then((data) => {
        setSrc(data);
      });
    } else {
      QrCode.toDataURL("UNDEFINED").then((data) => {
        setSrc(data);
      });
    }
  };

  return (
    <div className="w-1/1 h-1/1  min-w-min my-4">
      <h1 className=" text-gray-600 text-2xl  font-semibold text-center">
        Create a QR Code
      </h1>
      <div className="w-1/1 h-1/1 flex items-center justify-center my-2">
        <div className="bg-gray-50 shadow-md rounded-md w-2/3 max-w-xl text-center justify-center grid items-center">
          {src ? (
            <div className="py-2">
              <img
                download
                className="border-dashed border-4"
                src={src}
                alt="Here will be your QR Code."
              />
              <a className="" href={src} download>
                Click to download
              </a>
            </div>
          ) : (
            <p className="h-80 grid items-center">Here will be your QR Code.</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-16 ">
        <DataSelect />
        <input
          className="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={createQrCodeFromText}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateQR;
