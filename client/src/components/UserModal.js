import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem } from '@mui/material';

export default function UserModal({ 
  isOpen, modalType, handleClose, handleChange, form, 
  jobTitles, handleCreate, handleUpdate, errors }) {
  
  return (
    <Dialog 
      open={ isOpen } 
      onClose={ handleClose }
    >
      <DialogTitle>
          { modalType && modalType[0].toUpperCase() + modalType.slice(1) }
      </DialogTitle>
      <DialogContent>
        <TextField
          error={ 'first_name' in errors }
          helperText={ errors.hasOwnProperty('first_name') && errors?.first_name[0] }
          key="firstName"
          onChange={ e => handleChange(e.target.id, e.target.value) }
          value={ form.first_name }
          margin="dense"
          label="First Name"
          id="first_name"
          fullWidth
          variant="standard"
        />
        <TextField
          error={ 'last_name' in errors }
          helperText={ errors.hasOwnProperty('last_name') && errors?.last_name[0] }
          key="lastName"
          onChange={ e => handleChange(e.target.id, e.target.value) }
          value={ form.last_name }
          margin="dense"
          label="Last Name"
          id="last_name"
          fullWidth
          variant="standard"
        />
        <TextField
          error={ 'job_title' in errors }
          helperText={ errors.hasOwnProperty('job_title') && errors?.job_title[0] }
          key="jobTitle"
          onChange={ e => handleChange("job_title", e.target.value) }
          value={ form.job_title || "" }
          margin="dense"
          label="Job Title"
          id="job_title"
          fullWidth
          select
          variant="standard"
        >
          {jobTitles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              { option.value }
            </MenuItem>
          ))}
        </TextField>  
        <TextField
          error={ 'email' in errors }
          helperText={ errors.hasOwnProperty('email') && errors.email[0] }
          key="email"
          onChange={ e => handleChange(e.target.id, e.target.value) }
          value={ form.email }
          margin="dense"
          label="Email Address"
          id="email"
          fullWidth
          variant="standard"
        />    
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleClose }>Cancel</Button>
        <Button 
          onClick={ 
            modalType === 'edit' 
              ? () => handleUpdate(form.id, form) 
              : () => handleCreate(form) 
        }>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
