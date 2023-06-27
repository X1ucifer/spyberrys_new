import React from 'react';
import Customertable from '@components/table/customertable';
import CustomButton from '@components/common/CustomButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Box } from '@pankod/refine-mui';
import AllProperties from './all-properties';


const customerTable = () => {
  return (


    <Box>

      <AllProperties/>

      <Customertable />

    </Box>

    // <Box>
    //   <Box sx={{
    //     m:"auto",
    //     textAlign:"end",
    //     p: 2
    //   }}>
    //     <CustomButton
    //       type=""
    //       title="Add Customer"
    //       backgroundColor="#475be8"
    //       color="white"
    //       fullWidth={false}
    //       icon={<PersonAddAlt1Icon />}
         
    //     />

    //   </Box>


   

   

  )
}

export default customerTable