import '@testing-library/jest-dom';
 
export  const testContext = {
    dispatch : jest.fn(),
    user:{
        logged: true, 
        name:'Isaac'
    }
};

export  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
}