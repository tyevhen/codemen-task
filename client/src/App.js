import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@mui/material';
import User from './components/User';

const App = () => {
    return (
        <Container maxWidth="lg">
            <User/>
        </Container>
    );
};

export default App;
