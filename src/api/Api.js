// api.js

export const addPosts = async (
  username,
  email,
  streetAddress,
  zip,
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
        zip,
        userTimeValue,
        make,
        model,
        year,
        mpg,
        password,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();

    // Assuming your response includes a 'token' property
    const { token, ...restData } = data;

    // Set the token in your component's state
    setToken(token);

    // Update the posts state
    setPosts((posts) => [restData, ...posts]);

    // Set the body state if needed
    setBody('');

    return data;
  } catch (error) {
    console.error('Error in addPosts:', error);
    throw error; // Rethrow the error for the calling function to handle
  }
};
