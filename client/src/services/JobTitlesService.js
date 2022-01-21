import CrudService from "./CrudService";

class JobTitlesService extends CrudService {
    constructor() {
        super('job-titles');
    }
}

export default JobTitlesService;