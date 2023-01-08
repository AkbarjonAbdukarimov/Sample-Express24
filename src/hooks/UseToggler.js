import { useState } from "react";
const UseToggler = () => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
};
export default UseToggler;