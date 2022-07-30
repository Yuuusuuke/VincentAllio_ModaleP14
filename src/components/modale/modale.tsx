import React from "react";
import PropTypes, {InferProps} from "prop-types";
import "./modale.css";

export default function Modale({setFunction, text}: InferProps<typeof Modale.propTypes>){
    const closeModale = () => {
        setFunction(false);
    }
    return(
        <>
            <div className="modale">
                <span className="closeButton" onClick={closeModale}>X</span>
                <p>{text}</p>
            </div>
            <div className="smoke" data-testid="smoke" onClick={closeModale}></div>
        </>
    );
}

Modale.propTypes = {
    setFunction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};