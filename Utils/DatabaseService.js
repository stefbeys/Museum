import * as SQLite from 'expo-sqlite';
const database_name = "Reactoffline.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;
const db=SQLite.openDatabase(database_name, database_version, database_displayname, database_size);
export default class DB {
    _db;
    constructor() {
        this._db=db;
        this.openDB();
    }
    async openDB(){
        this._db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Animals(index, name, info, image, category, scanned)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS User (points)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS Stickers (index, image, name, bought)');
        })
    }
    executeSql = (sql,params=[])=>new Promise((resolve , reject)=>{
        this._db.transaction((trans)=>{
            trans.executeSql(sql,params,(db,results)=>{

                resolve(results);
            },
            (error)=>{
                reject(error);
            });
        });
    });
    async animalByName(name){
        try{
       return await this.executeSql("SELECT * FROM Birds WHERE index = ?",name);
    }
    catch{
        return null;
    }
    }

}
/*
export default class Database {
    static async initDBalt() {
        console.log(await SQLite.echoTest())
    }
    initDB() {
        let db;
        return new Promise((resolve) => {
            console.log("Plugin integrity check ...");
            SQLite.echoTest()
                .then(() => {
                    console.log("Integrity check passed ...");
                    console.log("Opening database ...");
                    SQLite.openDatabase(
                        database_name,
                        database_version,
                        database_displayname,
                        database_size
                    )
                        .then(DB => {
                            db = DB;
                            console.log("Database OPEN");
                            db.executeSql('SELECT 1 FROM Birds LIMIT 1').then(() => {
                                console.log("Database is ready ... executing query ...");
                            }).catch((error) => {
                                console.log("Received error: ", error);
                                console.log("Database not yet ready ... populating data");
                                db.transaction((tx) => {
                                    tx.executeSql('CREATE TABLE IF NOT EXISTS Birds (index, name, info, image, category, scanned)');
                                    tx.executeSql('CREATE TABLE IF NOT EXISTS User (points)');
                                    tx.executeSql('CREATE TABLE IF NOT EXISTS Stickes (index, image, name, bought)');
                                }).then(() => {
                                    console.log("Table created successfully");
                                }).catch(error => {
                                    console.log(error);
                                });
                            });
                            resolve(db);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log("echoTest failed - plugin not functional");
                });
        });
    };

    closeDatabase(db) {
        if (db) {
            console.log("Closing DB");
            db.close()
                .then(status => {
                    console.log("Database CLOSED");
                })
                .catch(error => {
                    this.errorCB(error);
                });
        } else {
            console.log("Database was not OPENED");
        }
    };

    birdByIndex(index) {
        console.log(index);
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('SELECT * FROM Birds WHERE index = ?', [index]).then(([tx, results]) => {
                        console.log(results);
                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    scanBird(index) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('UPDATE Birds SET scanned = true WHERE index = ?', [index]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    stickerByIndex(index) {
        console.log(index);
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('SELECT * FROM Stickers WHERE index = ?', [index]).then(([tx, results]) => {
                        console.log(results);
                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    buySticker(index) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('UPDATE Stickers SET bought = true WHERE index = ?', [index]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }


    getPoints(index) {
        console.log(index);
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('SELECT points FROM User').then(([tx, results]) => {
                        console.log(results);
                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

}
*/