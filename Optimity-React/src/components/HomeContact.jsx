import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff' // Set your primary color here (white)
        }
    }
});

const HomeContact = () => {
    return (
        <>
            <section className='!text-white'>
                <h3 className="text-center mb-6">Contact Us</h3>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
                    <div>
                        <h4 className="underline my-2">Office</h4>
                        <p>No.(605), 5th Floor, Building 16, MICT Park, Hlaing Township, Yangon, Myanmar</p>
                        <h4 className="underline my-2">Phone</h4>
                        <p>+959 4 2501 7904, +959 9 7976 2198</p>
                        <h4 className="underline my-2">Email</h4>
                        <p>info@optimitycomm.com</p>
                    </div>
                    <div className='text-center'>
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
                                noValidate
                                autoComplete="off"
                            >
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Full Name"
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Email"
                                        required
                                        fullWidth
                                    />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Phone Number"
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Region / Country"
                                        required
                                        fullWidth
                                    />
                                </div>
                                <div className='mb-4'>
                                    <TextField
                                        id="outlined-textarea"
                                        label="Company Name"
                                        multiline
                                        fullWidth
                                    />
                                </div>
                                 <div className='mb-4'>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        fullWidth
                                        rows={4}
                                    />
                                </div>
                            </Box>
                        </ThemeProvider>
                        <button className='mybutton'>Send Message</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeContact;
