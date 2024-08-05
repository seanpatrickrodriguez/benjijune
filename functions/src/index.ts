/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
export type CallableContext = functions.https.CallableContext;

admin.initializeApp();

async function createUser(
  email: string,
  password: string,
  displayName: string,
) {
  return admin
    .auth()
    .createUser({
      email: email,
      password: password,
      displayName: displayName,
    })
    .then((userRecord) => {
      console.log('Successfully created new user:', userRecord.uid);
      return userRecord;
    })
    .catch((error) => {
      console.error('Error creating new user:', error);
    });
}
