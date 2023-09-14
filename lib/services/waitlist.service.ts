export default class WaitlistService {
    async register(email: string) {
        const response = await fetch('/api/waitlist/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email
            })
        })

        if (!response.ok) {
            throw new Error('Error signing up to the waitlist');
        }

        return await response.json();
    }
}
