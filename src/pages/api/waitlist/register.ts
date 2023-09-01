
import * as admin from 'firebase-admin';
import { NextApiRequest, NextApiResponse } from 'next';

function initFirebase() {
    if (!admin.apps.length) {
        const serviceAccount = require("./service_account.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    }
    return admin.app();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email } = req.body

        const firebaseApp = initFirebase()
        const db = admin.firestore(firebaseApp)
        const col = db.collection('waitlist');
        const docRef = await col.add({ email: email });
        return res.status(200).json({ text: 'Success' })
    } catch (error: any) {
        console.trace(error)
        res.status(500).json({ text: 'Failed to save email' })
    }
}

