import CrudService from "./CrudService";

class UserService extends CrudService {
    constructor() {
        super('user');
    }
}

export default UserService;