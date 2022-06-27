const BASE_API = 'http://localhost:8000/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },
    LoginIn: async (email, password) => {
        console.log("email", email);
        console.log("password", password);


        const req = await fetch(`${BASE_API}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
        
    },
    Register: async (name, email, password, password_confirmation) => {
        const req = await fetch(`${BASE_API}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password, password_confirmation})
        });
        const json = await req.json();
        return json;
        
    }
};