import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeAlertIndicatorAction } from "./redux/alertIndicatorActions";

const AlertIndicator = () => {

    const dispatch = useDispatch();
    const message = useSelector(({ alertIndicatorState }) => alertIndicatorState.alertMessage);

    return (
        <div className={`
        z-500000 absolute w-300 top-100 right-0 slide-right p-20 bg-white rounded flex flex-col justify-center items-center
        `}>
            <div className={`w-full flex`}>
                {message}
                <div
                    onClick={() => dispatch(closeAlertIndicatorAction())}
                    className={`flex justify-end ml-20 fond-bold text-red-500 cursor-pointer text-xs`}>
                    &#10060;
                </div>
            </div>
        </div>
    );
};

export default AlertIndicator;