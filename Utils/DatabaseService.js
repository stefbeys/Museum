import { AsyncStorage } from 'react-native';
import { number } from 'prop-types';
export default class DB {
    Animalkey = "Animals"
    StoreKey = "Store"
    MoneyKey = "Money"
    constructor() {
        this.initDB()
    }
    async initDB() {
        if (await this.getJsonData(this.Animalkey) == null) {
            await this.saveIntData(this.Animalkey, []);
        }
        if (await this.getJsonData(this.StoreKey) == null) {
            await this.saveIntData(this.StoreKey, []);
        }
        if (await this.getIntData(this.MoneyKey) == null) {
            await this.saveIntData(this.MoneyKey, 0);
        }
    }
    async resetDB(){
        await this.saveIntData(this.Animalkey, []);
        await this.saveIntData(this.StoreKey, []);
        await this.saveIntData(this.MoneyKey, 0);
    }

    async getJsonData(key) {
        let result = await AsyncStorage.getItem(key);
        if (result != null) {
            result = JSON.parse(result)
        }
        return result;
    }
    async getIntData(key){
        let result=await AsyncStorage.getItem(key);
        if(result!=null){
            return parseInt(result)
        }
        else{
            return null;
        }
    }
    async saveIntData(key,value){
        await AsyncStorage.setItem(key,value.toString());
    }
    async saveJsonData(key, values) {
        await AsyncStorage.setItem(key, JSON.stringify(values));
    }
    async getAnimalByName(name) {
        const ScannedAnimals = await this.getJsonData(this.Animalkey);
        if (ScannedAnimals == null) {
            return null;
        }
        for (let animal of ScannedAnimals) {
            if (animal.name == name) {
                return animal;
            }
        }
        return null;
    }
    async addAnimal(animal) {

        try {
            const data = await this.getJsonData(this.Animalkey);
            if (data == null) {
                await this.saveJsonData(this.Animalkey, [animal])
                return true
            }
            else {
                for(let item of data){
                    if(animal.name==item.name){
                    
                        return false;
                    }
                }
                data.push(animal);
                await this.saveJsonData(this.Animalkey, data);
                return true;
            }
        }
        catch (e) {
            console.warn(e);
            return false;
        }
    }
    async getCredits(){
        return await this.getIntData(this.MoneyKey);
    }
    async addCredits(credits){
        const currentcreds=await this.getCredits();
        await this.saveIntData(this.MoneyKey,currentcreds==null?credits.toString():(parseInt(currentcreds)+credits).toString());
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
                            db.executeSql('SELECT 1 FROM animals LIMIT 1').then(() => {
                                console.log("Database is ready ... executing query ...");
                            }).catch((error) => {
                                console.log("Received error: ", error);
                                console.log("Database not yet ready ... populating data");
                                db.transaction((tx) => {
                                    tx.executeSql('CREATE TABLE IF NOT EXISTS animals (index, name, info, image, category, scanned)');
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

    animalByIndex(index) {
        console.log(index);
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('SELECT * FROM animals WHERE index = ?', [index]).then(([tx, results]) => {
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

    scananimal(index) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('UPDATE animals SET scanned = true WHERE index = ?', [index]).then(([tx, results]) => {
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