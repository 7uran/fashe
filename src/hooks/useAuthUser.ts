import { useState, useEffect } from "react";
import { auth } from "../app/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";

const useAuthUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return user;
};

export default useAuthUser;
