


import { Add } from "@mui/icons-material";
import { useList } from "@pankod/refine-core";
import { Stack, Typography, Box } from "@pankod/refine-mui";
import CustomButton from "@components/common/CustomButton";
import { useRouter } from 'next/router';



const AllProperties =() => {
    // const navigate = useNavigate();
    const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

    return(
       
        <Box>
            <Stack direction="row" 
            justifyContent="space-between" 
            alignItems="center">
                <Typography fontSize={25}
                fontWeight={700}
                color="#11142d">
                   User Data
                </Typography>
               

                <CustomButton
                
                        title="Add User"
                        handleClick={() => navigate('/create-property')}
                        backgroundColor="#475be8"
                         color="#fcfcfc"
                         icon ={<Add/>}
                         />

            </Stack>
        </Box>
     
      
    )
}

export default AllProperties;