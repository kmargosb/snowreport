import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
  credential: cert({
    projectId: "snow-report-es",
    clientEmail:
      "firebase-adminsdk-urzj7@snow-report-es.iam.gserviceaccount.com",
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  }),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}