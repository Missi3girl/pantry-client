import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/authSvc';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    InputLabel,
    Button,
    Paper,
    Snackbar,
    Alert,
    Typography
} from '@mui/material';

const registerUser = async ()