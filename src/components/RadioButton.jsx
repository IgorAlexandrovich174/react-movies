import React from "react";

export default function RadioButton(props) {
    const { title, datatype, checked, onChange } = props;
    return (
        <label>
            <input
                className="with-gap"
                name="type"
                type="radio"
                data-type={datatype}
                checked={checked}
                onChange={onChange}
            />
            <span>{title}</span>
        </label>
    );
}