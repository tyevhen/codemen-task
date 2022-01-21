import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem } from '@mui/material';

export default function UserModal({ 
  isOpen, modalType, handleClose, handleChange, form, jobTitles, handleCreate, handleUpdate, errors }) {
  // console.log("MODAL DATA", form)  
  // console.log("TYPE", modalType);
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
