import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const ContactForm = ({ primaryColor }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        country: '',
        companyName: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.fullName.trim()) {
            errors.fullName = 'Full Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = 'Phone Number is required';
            isValid = false;
        } else if (!validatePhoneNumber(formData.phoneNumber)) {
            errors.phoneNumber = 'Invalid phone number';
            isValid = false;
        }

        if (!formData.country.trim()) {
            errors.country = 'Region / Country is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // You can add your form submission logic here
            console.log(formData);
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phnumber) => {
        const phoneRegex = /^[0-9]+$/;
        return phoneRegex.test(phnumber);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: primaryColor // Set your primary color here (white)
            }
        }
    });

    return (
        <>
            <section className={`!text-[${primaryColor}] `}>
                <h3 className="text-center mb-6">Let's Connect</h3>
                <div className="flex flex-col-reverse md:flex-row ">
                    <div className="w-full md:w-1/2">
                        <h4 className="underline my-2">Office</h4>
                        <p>No.(605), 5th Floor, Building 16, MICT Park, Hlaing Township, Yangon, Myanmar</p>
                        <h4 className="underline my-2">Phone</h4>
                        <p>+959 4 2501 7904, +959 9 7976 2198</p>
                        <h4 className="underline my-2">Email</h4>
                        <p>info@optimitycomm.com</p>
                    </div>
                    <div className='w-full md:w-1/2 text-center'>
                        <ThemeProvider theme={theme}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiOutlinedInput-input': {
                                        color: theme.palette.primary.main, // Set text color to primary color
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: theme.palette.primary.main, // Set label color to primary color
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: theme.palette.primary.main, // Set border color to primary color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: theme.palette.primary.main, // Set border color on hover
                                        }
                                    },
                                }}
                                onSubmit={handleSubmit}
                                noValidate
                                autoComplete="off"
                            >
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <TextField
                                        id="fullName"
                                        name="fullName"
                                        label="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        error={errors.fullName}
                                        helperText={errors.fullName}
                                    />
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        error={errors.email}
                                        helperText={errors.email}
                                    />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <TextField
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        error={errors.phoneNumber}
                                        helperText={errors.phoneNumber}
                                    />
                                    <TextField
                                        id="country"
                                        name="country"
                                        label="Region / Country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        error={errors.country}
                                        helperText={errors.country}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <TextField
                                        id="companyName"
                                        name="companyName"
                                        label="Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </div>
                                <div className='mb-4'>
                                    <TextField
                                        id="message"
                                        name="message"
                                        label="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        multiline
                                        fullWidth
                                        rows={4}
                                    />
                                </div>
                                <Button variant="contained" type="submit" className='mybutton'>
                                    Send Message
                                </Button>
                            </Box>
                        </ThemeProvider>
                    </div>
                </div>
            </section>
        </>
    );
};

ContactForm.propTypes = {
    primaryColor: PropTypes.string
};

export default ContactForm;
