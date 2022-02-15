class Singleton {
    private static _instance: Singleton;

    data: string;

    constructor(value: string) { 
        this.data = value;
    }

    static getInstance(value: string) {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton(value);
        }
        return Singleton._instance;
    }
}

const instanse1 = Singleton.getInstance('Singleton 1');
console.log(instanse1.data);
const instanse2 = Singleton.getInstance('Singleton 2');
console.log(instanse2.data);
console.log(instanse1 === instanse2); // true