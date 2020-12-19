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

    createNewUser = () => {

    };

}