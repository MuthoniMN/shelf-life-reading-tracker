import React from "react";

export default function Button({text, type}) {
    return (
        <button className={type === "cta" ? 'cta' : "basic"}>
            {text}
        </button>
    )
}