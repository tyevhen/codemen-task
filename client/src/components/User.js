import { React, useEffect } from "react";
import { userActions } from "../state/user/actions";
import { connect } from "react-redux";
import UserTable from "./UserTable";
import UserModal from "./UserModal";
import { Button } from "@mui/material";

const User = (props) => {
    useEffect(
        () => {
            props.fetchUsers({limit: 10, offset: 0});
            props.fetchJobTitles();
        },
        []
    );

    return (
        <>
            <Button 
                style={{'marginTop': 20, 'marginBottom': 20}}
                variant="contained"
                onClick={ () => props.openModal("add", props.form) 
            }>
                New user
            </Button>    
            <UserTable 
                users={ props.users }
                handleOpenModal={ props.openModal }
                handleDelete={ props.deleteUser }
                limit={ props.limit }
            />
            <UserModal 
                modalType={ props.modalType }
                isOpen={ props.isModalOpen }
                handleClose={ props.closeModal }
                handleCreate={ props.createUser }
                handleUpdate={ props.updateUser }
                handleChange={ props.handleFormInputChange }
                form={ props.form }
                errors={ props.errors }
                jobTitles={ props.jobTitles }
            />
        </>
    );
};

const mapDispatchToProps = {
    ...userActions,
};

const mapStateToProps = state => {
    return {
        users: state.user.users,
        limit: state.user.limit,
        isModalOpen: state.user.isModalOpen,
        modalType: state.user.modalType,
        form: state.user.form,
        errors: state.user.errors,
        jobTitles: state.user.jobTitles
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
