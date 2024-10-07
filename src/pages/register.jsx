// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Divider, Grid2 as Grid, Paper, Typography} from '@mui/material';
import img1 from "../../src/assets/images/dashboard/signUpImage.svg"
import logo from "../../src/assets/images/dashboard/logo.svg"
import googleIcon from "../../src/assets/images/dashboard/googleIcon.svg"
import fbIcon from "../../src/assets/images/dashboard/fbIcon.svg"
import { useForm } from 'react-hook-form';
import FormInput from '../common/FormInput.tsx';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';

const Register = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: { userId: '', password: '', rememberMe: false },
    mode: 'onBlur',
  });

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(onSubmit, onLocalError);
    }
  };

  const onSubmit = async (formData) => {
    console.log("---formData",formData)
  };

  const onLocalError = () => {};


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));


  return (
    // <PageContainer title='Register' description='this is Reset Password page'>
      <Grid container spacing={0} sx={{ width: '100%', height: '100vh' }}>
        <Grid
          item
         size={5}
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: '0.3',
            },
            padding:'20px 20px'
          }}
          >
          <Box position='relative'>
            <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', }}>
            <img
                src={logo}
                alt='bg'
              />
            </Box>
            <Box
              // alignItems='center'
              // justifyContent='center'
              height={'calc(100vh - 75px)'}
              width={'100%'}
              sx={{

                display: {
                  lg: 'flex',
                },flexDirection:'column'
              

              }}>
              <Typography variant='h5' mt={3}>Start your free trial</Typography>
              <Typography variant='body1' mb={1}>Get started with a demo account on ezsip</Typography>
          <Box display={'flex'} flexDirection={'column'} gap={1}>

          <FormInput control={control} required={'User id is required'} type='text' label="Your Name" name='name' onKeyDown={handleKeyDown} />
          <FormInput control={control} required={'User id is required'} type='text' label="Business Email" name='email' onKeyDown={handleKeyDown} />
          <FormInput control={control} required={'User id is required'} type='text' label="Phone Number" name='phone' onKeyDown={handleKeyDown} />
          <FormInput control={control} required={'User id is required'} type='text' label="Company Name" name='companyName' onKeyDown={handleKeyDown} />
          <FormInput control={control} required={'User id is required'} type='text' label="Website" name='website' onKeyDown={handleKeyDown} />
          <FormInput control={control} required={'User id is required'} type='text' label="No of Team members" name='members' onKeyDown={handleKeyDown} />
          </Box>
          <Box mt={1}>
        <LoadingButton
          color='primary'
          // loading={loading}
          // disabled={loading}
          variant='contained'
          size='large'
          fullWidth
          onClick={handleSubmit(onSubmit, onLocalError)}
          // type='submit'
          type='submit'>
          Register
        </LoadingButton>
      </Box>
      <Divider sx={{my:2}}>or</Divider>
      <Box>
        <Grid container spacing={0.5}>
        <Grid size={4}>
          <Item sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:1}}>Google <img
                src={googleIcon}
                alt='bg'
              /></Item>
        </Grid>
        <Grid size={4}>
          <Item sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:1}}>Facebook<img
                src={fbIcon}
                alt='bg'
              /></Item>
        </Grid>
        <Grid size={4}>
          <Item sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:1}}>Microsoft<img
                src={googleIcon}
                alt='bg'
              /></Item>
        </Grid>
        </Grid>
      </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item size={7} display='flex' justifyContent='center' alignItems='center' sx={{  background: '#1067DB',borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px' }}> 
          <Box p={4}>
            <img
                src={img1}
                alt='bg'
                style={{
                  height:'400px',
                  width: '400px',
                  // maxWidth: '600px',
                }}
              />
          </Box>
        </Grid>
      </Grid>
    // </PageContainer>
  );
};

export default Register;
