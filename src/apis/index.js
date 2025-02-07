export async function signup(payload) {
    const response = await fetch('https://growby.onrender.com/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Signup failed`);
    }

    const data = await response.json();
    return data;
}

export async function login(payload) {
    const response = await fetch('https://growby.onrender.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Login failed`);
    }

    const data = await response.json();
    return data;
}
