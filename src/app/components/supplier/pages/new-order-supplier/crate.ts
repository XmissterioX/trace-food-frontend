export class Crate {
    public crateId: String;
    public name: String;
    public description: String;
    public supplier: String;
    public restaurant: String;

    constructor(crateId: String, name: String, description: String) {
        this.crateId = crateId;
        this.name = name;
        this.description = description;

    }

  }
