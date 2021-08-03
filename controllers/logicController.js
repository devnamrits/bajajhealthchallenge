exports.postLogic = (req, res, next) => {
    console.log("Request:", req.body);
    var array = req.body.array;
    var evenArray = [];
    var oddArray = [];

    var finalArray = [];

    array.map((num) => {
        finalArray.push(Number(num));
    })

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
        array.map((num) => {
            if (!(parseInt(num) % 2))
                evenArray.push(parseInt(num));
            else
                oddArray.push(parseInt(num));
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