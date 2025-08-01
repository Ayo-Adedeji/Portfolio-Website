import React, { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";

const ConstructionAlert = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-20 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded shadow-lg z-50 max-w-xs animate-bounce-slow">
      <div className="flex items-start gap-2">
        <FaTools className="text-yellow-500 mt-1" />
        <div>
          <p className="font-semibold">Site Under Construction</p>
          <p className="text-sm">Some features may not be fully functional yet.</p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionAlert;
