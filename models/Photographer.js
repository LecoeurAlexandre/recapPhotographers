export default class Photographer {
    constructor(
        id,
        firstName,
        lastName,
        birthDate,
        birthPlace,
        deathDate,
        deathPlace,
        infos,
        photo
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.birthPlace = birthPlace;
        this.deathDate = deathDate;
        this.deathPlace = deathPlace;
        this.infos = infos;
        this.photo = photo
    }
}