import axios from 'axios';

export const loginApi = async (userData) => {
  try {
    const { data } = await axios.post('/api/login', {
      Mail: userData.email,
      password: userData.password
    });
    Cookies.set('token', JSON.stringify(data.Message), { expires: 1 });

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchUserApi = async (token) => {

    console.log("uu",token)
  try {
    const response = await axios.get('/api/get_user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Cookies.set('user', JSON.stringify(response.data.Message), { expires: 1 }); // expires in 1 day
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const becomeInstructorApi = async (teacherData, token) => {
  try {
    const response = await axios.post('/api/make_instructor', {
      phone: teacherData.phone,
      dateofbirth: teacherData.value.$d
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const instructorToken = response.data.Message;

    Cookie.set('instructorToken', instructorToken);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
