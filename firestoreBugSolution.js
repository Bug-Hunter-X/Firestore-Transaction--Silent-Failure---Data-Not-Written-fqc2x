The issue was likely due to insufficient error handling and a misunderstanding of transaction results.  The solution involves adding more robust error handling and explicitly checking the returned `Promise` from the `runTransaction` method. Here's the corrected code:

```javascript
firebase.firestore().runTransaction(transaction => {
  // ... your transaction logic ...
  return transaction.get(docRef).then(doc => {
    if (!doc.exists) {
      throw new Error('Document does not exist!');
    }
    // ... update the document ...
    return transaction.update(docRef, updatedData);
  });
}).then(() => {
  console.log('Transaction successfully committed!');
}).catch(error => {
  console.error('Transaction failed:', error);
  // Handle the error appropriately, e.g., retry or alert the user
});
```
This improved version includes a check for document existence before updating and provides more informative error handling for debugging.