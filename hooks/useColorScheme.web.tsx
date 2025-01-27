import { useEffect, useState } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";

export function useColorScheme() {
    const [hasHydrated, sethasHydrated] = useState(false);

    useEffect(() => {
        sethasHydrated(true);
    },[]);

    const colorScheme = useRNColorScheme();

    if (hasHydrated){
        return 'light';
    }
}