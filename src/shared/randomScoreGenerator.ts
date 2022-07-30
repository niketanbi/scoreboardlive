interface IrandomScoreGenerator {
    userID: string;
    displayName: string;
    picture: string;
    score: number;
}

function randomScoreGenerator() {
    const flickingData = [
        {
            "userID": "u-1",
            "displayName": "Jone",
            "picture": "",
            "score": 15700
        },
        {
            "userID": "u-2",
            "displayName": "Victoria",
            "picture": "",
            "score": 46200
        },
        {
            "userID": "u-3",
            "displayName": "Joy",
            "picture": "",
            "score": 38800
        },
        {
            "userID": "u-4",
            "displayName": "Quinn",
            "picture": "",
            "score": 33400
        },
        {
            "userID": "u-5",
            "displayName": "Sheenalo", "picture":
                "",
            "score": 31600
        },
        {
            "userID": "u-6",
            "displayName": "Charlene", "picture":
                "",
            "score": 30800
        },
        {
            "userID": "u-7",
            "displayName": "LeonaBaby", "picture":
                "",
            "score": 22300
        },
        {
            "userID": "u-8",
            "displayName": "Sunny",
            "picture": "",
            "score": 17800
        },
        {
            "userID": "u-9",
            "displayName": "ImWord",
            "picture": "",
            "score": 17300
        },
        {
            "userID": "u-10",
            "displayName": "Dophine",
            "picture": "",
            "score": 15400
        }
    ]
    return flickingData.map((userData, index: number) => {
        userData.score = userData.score + Math.ceil(Math.random() * 9999) * (Math.round(Math.random()) ? 1 : -1)
        return userData;
    }).sort((a, b) => {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }
        return 0;
    });
}

export default randomScoreGenerator;