import { dummyUsers } from "./fake-data/dummyUsers";
import {getErrorWorker} from "../components/error-indicator/redux/errorIndicatorSaga";

export default class ServiceApi{

    getLogin = (user, realData) => {
        const { login, password } = user;

        if (!realData) {
            return new Promise((resolve) => {
                setTimeout(() => {
                        const user = dummyUsers.find((user) => user.userName.toString() === login.toString() &&
                        user.password.toString() === password.toString());
                        if (user) {
                            resolve(user);
                        } else {
                            resolve(null);
                        }
                    }, 700);
            })
                .then((res) => {
                    if (Math.random() > 0.75) {
                        return null;
                    }
                    return res;
                })
                .catch(() => {
                    return null;
                });
        }
    };

    createNewUser = (newUser, realData) => {
        const { login, email, password } = newUser;
        if (!realData) {
            const users = dummyUsers;
            return new Promise((resolve) => {
                setTimeout(() => {
                    const checkLogin = users.find((user) => user.userName.toString() === login.toString());
                    const checkEmail = users.find((user) => user.userEmail.toString() === email.toString());
                    const newUser = {
                        id: users.length,
                        role: "user",
                        userName: login,
                        userEmail: email,
                        password: password,
                        token: `eexxaammppllee%ttookkeenn#${users.length}`,
                        refreshToken: `eexxaammppllee%rreeffrreesshh%ttookkeenn#${users.length}`
                    };
                    if (checkLogin) {
                        resolve({
                            error: true,
                            messageError: "A user with this login already exists",
                            titleError: "Registration error!"
                        });
                    } else if (checkEmail) {
                        resolve({
                            error: true,
                            messageError: "A user with this email already exists",
                            titleError: "Registration error!"
                        });
                    } else {
                        dummyUsers.push(newUser);
                        resolve(newUser);
                    }
                }, 700);
            })
                .then((res) => {
                    if (Math.random() > 0.75) {
                        return {
                            error: true,
                            messageError: "An error occurred on the server, please try again",
                            titleError: "Server error!"
                        };
                    }
                    return res;
                })
                .catch(() => {
                    return {
                        error: true,
                        messageError: "An error occurred on the server, please try again",
                        titleError: "Server error!"
                    };
                });
        }
    };

}