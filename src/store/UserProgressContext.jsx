import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
    showSuccess: () => {},
    hideSuccess: () => {},
    showFailure: () => {},
    hideFailure: () => {}
})

export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    function showSuccess() {
        setUserProgress('success');
    }

    function hideSuccess() {
        setUserProgress('');
    }

    function showFailure() {
        setUserProgress('failure');
    }

    function hideFailure() {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showSuccess,
        hideSuccess,
        showFailure,
        hideFailure
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}

export default UserProgressContext;