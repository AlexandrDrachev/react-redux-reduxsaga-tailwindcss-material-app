import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Spinner from "../spinner";
import { adminGetUsersAction, adminTestActionChannelAction } from "./redux/adminActions";

const Admin = () => {

    const adminState = useSelector(({ adminState }) => adminState);
    const { loading, loaded, users, testBufferCounter } = adminState;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!users) {
            dispatch(adminGetUsersAction());
        }
    }, []);

    // if (!users) {
    //     return <Spinner />
    // }

    return (
        <div className={`w-full flex flex-col justify-center items-center mt-40`}>
            <div className={`text-white font-bold`}>
                Admin Dashboard
            </div>
            <div className={`flex mt-40 sm:flex-col sm:justify-center sm:items-center`}>
                <div className={`w-100 h-50 flex flex-col justify-center items-center bg-white rounded m-15 relative`}>
                    {testBufferCounter}
                    <div className={`absolute -top-15 text-xs text-white font-bold whitespace-nowrap`}>
                        test buffer channel:
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
                        press several times quickly
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;