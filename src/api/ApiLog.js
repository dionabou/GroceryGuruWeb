// apilog.js

export const addPosts = async (
  username,
  password,
  setPosts,
  setToken,
  setBody
) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/authenticate', {
      method: 'POST',
      body: JSON.stringify({
        username,
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

    // Assuming response includes a 'token' property
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
