// api.js

export const addPosts = async (
  username,
  email,
  streetAddress,
  zipcode,
  userTimeValue,
  make,
  model,
  year,
  mpg,
  password,
  setPosts,
  setToken,
  setBody
) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        streetAddress,
        zipcode,
        userTimeValue,
        make,
        model,
        year,
        mpg,
        password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      // If the response status is not ok, handle the error
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();

    // Assuming your response includes a 'token' property
    const { token, ...restData } = data;

    // Set the token in localStorage
    localStorage.setItem('token', token);


    // setToken(token);

    // // Update the posts state
    // setPosts((posts) => [restData, ...posts]);

 
    // setBody('');

    return data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for the calling function to handle
  }
};
