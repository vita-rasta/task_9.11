const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Василина",
            "id_3": "Ольга",
            "id_4": "Светлана",
            "id_5": "Алина",
            "id_6": "Валентина",
            "id_7": "Раиса",
            "id_8": "Анастасия",
            "id_9": "Варвара",
            "id_10": "Мария"
        }
    }`,

    professionJsonFemale: `{
        "count": 8,
        "list": {     
            "id_1": "Парикмахер",
            "id_2": "Водитель",
            "id_3": "Повар",
            "id_4": "Переводчик",
            "id_5": "Программист",
            "id_6": "Бухгалтер",
            "id_7": "Писатель",
            "id_8": "Актер"
        }
    }`,

    professionJsonMale: `{
        "count": 14,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Машинист электровоза",
            "id_3": "Солдат",
            "id_4": "Слесарь",
            "id_5": "Пожарный",
            "id_6": "Грузчик",
            "id_7": "Парикмахер",
            "id_8": "Водитель",
            "id_9": "Повар",
            "id_10": "Переводчик",
            "id_11": "Программист",
            "id_12": "Бухгалтер",
            "id_13": "Писатель",
            "id_14": "Актер"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return Math.round(Math.random()) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'a';
        } 
    },

    randomMiddleName: function() {

        let middleName = this.randomValue(this.firstNameMaleJson);
        let middleNameLast = middleName.substr(-1);

        if (this.person.gender == 'Мужчина') {
            var middleMaleName = middleNameLast;
        } else {
            var middleFemaleName = middleNameLast;
        }

        switch (middleMaleName) {
            case 'р':
                return middleName.replace('р', 'рович');
            case 'м':
                return middleName.replace('м', 'мович');
            case 'н':
                return middleName.replace('н', 'нович');
            case 'й':
                return middleName.replace('й', 'евич');
            case 'а':
                return middleName.replace('а', 'ович');
            case 'л':
                return middleName.replace('л', 'лович');
        }

        switch (middleFemaleName) {
            case 'р':
                return middleName.replace('р', 'ровна');
            case 'м':
                return middleName.replace('м', 'мовна');
            case 'н':
                return middleName.replace('н', 'новна');
            case 'й':
                return middleName.replace('й', 'евна');
            case 'а':
                return middleName.replace('а', 'овна');
            case 'л':
                return middleName.replace('л', 'ловна');
        }

        return middleName;
        
    },

    randomBirthMonth: function() {
        return this.randomValue(this.birthMonthJson);
    },

    randomBirthDay: function(min, max) {
        min = 1;
        
        if (this.person.birthMonth == "февраля") {
            max = 27;
        } else if (this.person.birthMonth == "апреля" ) {
            max = 29;
        } else if (this.person.birthMonth == "июня" ) {
            max = 29;
        } else if (this.person.birthMonth == "сентября" ) {
            max = 29;
        } else if (this.person.birthMonth == "ноября" ) {
            max = 29;
        } else {
            max = 30;
        }

        return Math.round(Math.random() * (max - min + 1) + min);
    },

    randomBirthYear: function(min, max) {
        min = 1943;
        max = 2005;
        return Math.round(Math.random() * (max - min + 1) + min);
    },
  
    randomProfession: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionJsonMale);
        } else {
            return this.randomValue(this.professionJsonFemale);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay();
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession();
        return this.person;   
    }

    
};


