import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { eng } from "../../translate/eng";
import { rus } from "../../translate/rus";
import { ukr } from "../../translate/ukr";
import { translator } from "../../../../translator/translator";
import {adminTestActionChannelAction} from "../../redux/adminActions";

const TestBufferChannel = () => {

    const dispatch = useDispatch();
    const language = useSelector(({ appState }) => appState.language);
    const adminState = useSelector(({ adminState }) => adminState);
    const { testBufferCounter } = adminState;
    const [ l, setL ] = useState({});

    useEffect(() => {
        if (language === "eng") {
            setL(eng);
        }
        if (language === "rus") {
            setL(rus);
        }
        if (language === "ukr") {
            setL(ukr);
        }
    }, [language]);

    return (
        <div className={`w-full p-20 flex flex-col justify-center items-center`}>
            <div>
                TestBufferChannel Component
            </div>
            <div className={`flex mt-40 sm:flex-col sm:justify-center sm:items-center`}>
                <div className={`w-100 h-50 flex flex-col justify-center items-center bg-white rounded m-15 relative`}>
                    {testBufferCounter}
                    <div className={`absolute -top-15 text-xs text-white font-bold whitespace-nowrap`}>
                        {l.testBufferChannel}
                    </div>
                </div>
                <div
                    className={`p-15 w-300 h-50 cursor-pointer rounded m-15 relative`}>
                    <div
                        onClick={() => dispatch(adminTestActionChannelAction())}
                        className={`z-20 absolute w-full top-0 right-o bottom-0 left-0`}/>
                    <div className={`
                    z-10 absolute w-full top-0 right-o bottom-0 left-0 bg-white rounded flex flex-col justify-center 
                    items-center
                    `}>
                        {l.pressSeveralTimesQuickly}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestBufferChannel;