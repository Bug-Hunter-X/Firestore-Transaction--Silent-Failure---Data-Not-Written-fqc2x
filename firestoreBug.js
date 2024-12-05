In a Firebase project, I'm encountering an unusual error where data isn't being written to Firestore despite seemingly successful transactions.  My code uses transactions to update multiple documents atomically, and while the transaction commits without throwing errors, the expected changes are absent in Firestore. The `onSnapshot` listener doesn't reflect the updates either. I've confirmed the security rules allow write access and the transaction structure is correct.