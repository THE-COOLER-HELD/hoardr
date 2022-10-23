import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useNavMenu = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function navigateTo(path) {
        return function () {
            navigate(path);
            setOpen(false);
        };
    }

    function toggleMenu() {
        setOpen(!open);
    }

    return { open, navigateTo, toggleMenu }
}

export default useNavMenu