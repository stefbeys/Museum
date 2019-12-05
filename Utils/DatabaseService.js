import { AsyncStorage } from "react-native";
export const Pages = {
  INDEX: "index",
  INFO: "info",
  STORE: "store"
};
export default class DB {
  Animalkey = "Animals";
  StoreKey = "Store";

  MoneyKey = "Money";
  Companionkey = "Companion";
  constructor() {
    this.initDB();
  }
  async initDB() {
    if ((await this.getJsonData(this.Animalkey)) == null) {
      await this.saveIntData(this.Animalkey, []);
    }
    if ((await this.getJsonData(this.StoreKey)) == null) {
      await this.saveIntData(this.StoreKey, []);
    }
    if ((await this.getIntData(this.MoneyKey)) == null) {
      await this.saveIntData(this.MoneyKey, 0);
    }
    if ((await this.getJsonData(this.Companionkey)) == null) {
      await this.saveJsonData(this.Companionkey, {
        index: false,
        info: false,
        store: false
      });
    }
  }
  async resetDB() {
    await this.saveIntData(this.Animalkey, []);
    await this.saveIntData(this.StoreKey, []);
    await this.saveIntData(this.MoneyKey, 0);
    await this.saveJsonData(this.Companionkey, {
      index: false,
      info: false,
      store: false
    });
  }

  async getJsonData(key) {
    let result = await AsyncStorage.getItem(key);
    if (result != null) {
      result = JSON.parse(result);
    }
    return result;
  }
  async getIntData(key) {
    let result = await AsyncStorage.getItem(key);
    if (result != null) {
      return parseInt(result);
    } else {
      return null;
    }
  }
  async saveIntData(key, value) {
    await AsyncStorage.setItem(key, value.toString());
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
  async buyStickerPack(pack) {
    await this.addCredits(-pack.price);
    let storedItems = await this.getJsonData(this.StoreKey);
    storedItems = storedItems == null ? [] : storedItems;
    pack.claimed = true;
    storedItems.push(pack);
    await this.saveJsonData(this.StoreKey, storedItems);
  }
  async checkIfBought(packNumber) {
    const boughtList = await this.getJsonData(this.StoreKey);
    if (boughtList != null) {
      for (let item of boughtList) {
        if (item.pack == packNumber) return true;
      }
      return false;
    }
    return false;
  }
  async addAnimal(animal) {
    try {
      const data = await this.getJsonData(this.Animalkey);
      if (data == null) {
        await this.saveJsonData(this.Animalkey, [animal]);
        return true;
      } else {
        for (let item of data) {
          if (animal.name == item.name) {
            return false;
          }
        }
        data.push(animal);
        await this.saveJsonData(this.Animalkey, data);
        return true;
      }
    } catch (e) {
      console.warn(e);
      return false;
    }
  }

  async getCredits() {
    return await this.getIntData(this.MoneyKey);
  }
  async addCredits(credits) {
    const currentcreds = await this.getCredits();
    await this.saveIntData(
      this.MoneyKey,
      currentcreds == null
        ? credits.toString()
        : (parseInt(currentcreds) + credits).toString()
    );
  }
  async getCompanion(page) {
    const object = await this.getJsonData(this.Companionkey);
    return object[page];
  }
  async saveCompanion(page, value) {
    const object = await this.getJsonData(this.Companionkey);
    object[page] = value;
    await this.saveJsonData(this.Companionkey, object);
  }
}

