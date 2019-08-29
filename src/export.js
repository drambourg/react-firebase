// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config');
const fs = require('fs');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonfromFirestore = async () => {
    try {
        await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
// Start exporting your data
        await firestoreService
            .backups()
            .then(data => {
                // Write collection to JSON file
                fs.writeFile("firestore-export.json", JSON.stringify(data),
                    function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                    });
            })

    }
    catch (error) {
        console.log(error);
    }
};

jsonfromFirestore();