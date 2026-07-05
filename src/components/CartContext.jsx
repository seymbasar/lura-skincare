import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const STORAGE_KEY = "lura-cart";

// Sayfa ilk yüklendiğinde localStorage'da kayıtlı bir sepet var mı diye bakar.
// Yoksa ya da bozuksa boş bir sepetle başlar.
const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Sepet localStorage'dan okunamadı:", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  // cartItems her değiştiğinde localStorage'a kaydeder,
  // böylece sayfa yenilense veya tarayıcı kapatılıp açılsa bile sepet kaybolmaz.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Sepet localStorage'a kaydedilemedi:", error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item)),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const numeric = parseInt(item.price.replace(/[^\d]/g, ""), 10) || 0;
    return sum + numeric * item.qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
