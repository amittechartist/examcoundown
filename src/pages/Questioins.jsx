import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appurl } from "../Helper";

const Page = () => {
    const [selectedOptions, setSelectedOptions] = useState(Array(50).fill(null));

    const handleOptionSelect = (index, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = option;
        setSelectedOptions(newSelectedOptions);
    };

    const resetSelections = () => {
        setSelectedOptions(Array(50).fill(null));
    };

    return (
        <>
            <div className="row">
                {Array.from({ length: 50 }, (_, index) => (
                    <div key={index} className="col-md-12 mb-2">
                        <div className="d-flex justify-content-center">
                            <p className="mb-0 mx-1">{index + 1}.</p>
                            {['A', 'B', 'C', 'D', 'E'].map(option => (
                                <button
                                    key={option}
                                    className={`btn mx-1 ${selectedOptions[index] === option ? 'btn-success' : 'btn-outline-primary'}`}
                                    onClick={() => handleOptionSelect(index, option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-danger" onClick={resetSelections}>Reset</button>
            </div>
        </>
    );
};

export default Page;
