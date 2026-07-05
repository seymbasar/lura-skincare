import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

let idCounter = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // type: "success" | "error" | "info"
  const showToast = useCallback(
    (message, type = "success") => {
      const id = ++idCounter;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => removeToast(id), 3000);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast konteyneri: ekranın sağ altında, en üst katmanda */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={`pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-sm shadow-2xl min-w-[240px] max-w-[340px] text-[12px] tracking-wide animate-toast-in ${
              toast.type === "error"
                ? "bg-[#8B2635] text-white"
                : "bg-[#1A1A1A] text-white"
            }`}
          >
            <span className="text-lg leading-none">
              {toast.type === "error" ? "!" : "✓"}
            </span>
            <span className="font-light">{toast.message}</span>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes toast-in {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-toast-in {
              animation: toast-in 0.3s ease-out;
            }
          `,
        }}
      />
    </ToastContext.Provider>
  );
};
