import '@testing-library/jest-dom';
 
export  const testContext = {
    dispatch : jest.fn(),
    user:{
        logged: true, 
        name:'Isaac'
    }
};
