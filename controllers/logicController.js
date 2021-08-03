exports.postLogic = (req, res, next) => {
    console.log("Request:", req.body);
    var numbers = req.body.numbers;
    var evenArray = [];
    var oddArray = [];

    var finalArray = [];

    numbers.map((num) => {
        finalArray.push(Number(num));
    })

    console.log(finalArray);

    var numericChecker = finalArray.filter(function (num) {
        return isNaN(num);
    }).length > 0;

    var floatCheker = false;

    for (let i = 0; i < finalArray.length; i++) {
        if (!Number.isInteger(finalArray[i])) {
            floatCheker = true;
        }
        console.log(finalArray[i], floatCheker);
        if (floatCheker)
            break;
    }

    if (!numericChecker && !floatCheker) {
        finalArray.map((num) => {
            if (!(parseInt(num) % 2))
                evenArray.push(num);
            else
                oddArray.push(num);
        })

        res.send({
            "is_success": true,
            "user_id": "Hritik_Kumar_16102000",
            "oddArray": oddArray,
            "evenArray": evenArray
        })
    }
    else {
        res.send({
            "is_success": false,
            "user_id": "Hritik_Kumar_16102000"
        })
    }
}