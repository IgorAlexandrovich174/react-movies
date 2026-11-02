import React from "react";

class RadioButton extends React.Component {
    render() {
        const { title, datatype, checked, onChange } = this.props;
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
}

export { RadioButton };