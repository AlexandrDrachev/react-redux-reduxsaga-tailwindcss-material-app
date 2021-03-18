import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { eng } from '../../translate/eng';
import { rus } from '../../translate/rus';
import { ukr } from '../../translate/ukr';
import { IconButton, Tooltip } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ModalConfirm from '../../../custom-collection/modals/confirm';

const Users = () => {

    const dispatch = useDispatch();
    const adminState = useSelector(({ adminState }) => adminState);
    const language = useSelector(({ appState }) => appState.language);
    const { usersEntity } = adminState;
    const { users, ids } = usersEntity;
    const [ l, setL ] = useState({});
    const [ lockUserModalConfirm, setLockUserModalConfirm ] = useState({
        active: false,
        id: null,
        message: '',
        action: null,
        confirmButtonName: '',
    });
    const [ activeCell, setActiveCell ] = useState(null);
    const onToggleUserLock = (id) => {
        const buttonName = users[id].locked ? 'Lock' : 'Unlock';
        const confirmMessage = users[id].locked ? 'To unblock this user?' : 'To block this user?';
        setLockUserModalConfirm({
            ...lockUserModalConfirm,
            active: true,
            id: id,
            confirmButtonName: buttonName,
            message: confirmMessage,
        });
    };

    const renderUsersTable = () => {
        return (
            <div className={`w-full sm:h-300 flex overflow-auto`}>
                <table
                  className={`
                  w-full text-white border-t border-white whitespace-nowrap`}
                >
                <thead className={`w-full border-b border-white`}>
                    <tr className={`text-center`}>
                        <td className={`pr-10`}>id</td>
                        <td>avatar</td>
                        <td>name</td>
                        <td>email</td>
                        <td>role</td>
                        <td>actions</td>
                    </tr>
                </thead>
                <tbody className={`overflow-auto`}>
                    {ids.map((id) => {
                        return (
                            <tr
                                key={id}
                                onClick={() => setActiveCell(id)}
                                className={`
                                hover:bg-blue-500 text-center
                                ${activeCell === id && `bg-blue-500`}
                                `}>
                                <td className={`pr-10`}>{users[id].id}</td>
                                <td className={`w-20 h-20 pr-10`}>
                                    <img alt="" src={users[id].avatar} className={`w-full rounded-full my-5`}/>
                                </td>
                                <td className={`pr-10`}>{users[id].userName}</td>
                                <td className={`pr-10`}>{users[id].userEmail}</td>
                                <td className={`pr-10`}>{users[id].role}</td>
                                <td>
                                    <div className={`flex justify-center items-center`}>
                                        <IconButton className={`focus:outline-none`}>
                                            {
                                                users[id].locked ?
                                                <Tooltip title={`unlocked?`} placement="left-start" arrow>
                                                    <LockIcon
                                                      className={`text-red-600 hover:text-gray-700`}
                                                      onClick={() => onToggleUserLock(id)}
                                                    />
                                                </Tooltip> :
                                                <Tooltip title={`locked?`} placement="left-start" arrow>
                                                    <LockOpenIcon
                                                      className={`text-white hover:text-gray-700`}
                                                      onClick={() => onToggleUserLock(id)}
                                                    />
                                                </Tooltip>
                                            }
                                        </IconButton>
                                        <IconButton className={`focus:outline-none`}>
                                            <Tooltip title={`read?`} placement="left-start" arrow>
                                                <MailOutlineIcon
                                                  className={`text-white hover:text-gray-700`}
                                                />
                                            </Tooltip>
                                        </IconButton>
                                        <IconButton className={`focus:outline-none`}>
                                            <Tooltip title={`delete?`} placement="left-start" arrow>
                                                <DeleteOutlineIcon
                                                  className={`text-white hover:text-gray-700`}
                                                />
                                            </Tooltip>
                                        </IconButton>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        );
    };

    useEffect(() => {
        if (language === 'eng') {
            setL(eng);
        }
        if (language === 'rus') {
            setL(rus);
        }
        if (language === 'ukr') {
            setL(ukr);
        }
    }, [language]);

    return (
        <div
          className={`
          w-full flex flex-col justify-center items-center sm:items-start`}
        >
            <div className={`font-bold text-white my-10`}>
                {l.usersComponentHeader}
            </div>
            {renderUsersTable()}
            {lockUserModalConfirm.active && <ModalConfirm data={lockUserModalConfirm} onClose={setLockUserModalConfirm} />}
        </div>
    );
};

export default Users;
