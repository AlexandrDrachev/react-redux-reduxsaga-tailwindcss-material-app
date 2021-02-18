import { dummyUsers } from "./fake-data/dummyUsers";

export default class AdminApi {

    getUsers = (realData) => {
        if (!realData) {
            return new Promise((resolve => {
                setTimeout(() => {
                    resolve(dummyUsers);
                }, 750);
            }))
                .then((res) => res)
                .catch(() => null);
        }
    };
}