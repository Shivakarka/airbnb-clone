import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { disableOuterClick } from "../redux/features/searchWidgetSlice";


const useOutsideClick = (ref, callback) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        } else {
            callback();
            dispatch(disableOuterClick());
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
};

export default useOutsideClick;