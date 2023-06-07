const resultsJSON = {
    1: {
        salud: 8/100,
        pension: 10/100,
        salario: 0
    },
    2: {
        base: 0,
        height: 0,
        area: 0
    },
    3: {
        numberOne: 0,
        numberTwo: 0,
        result: 0,
    },
    4: {
        sueldo: 0,
        horas: 0,
        valorHora: 0
    },
    5: {
        price: 0,
        IVA: 0,
        total: 0,
    },
    6: {
        males: 0,
        females: 0,
        total: 0
    },
    7: {
        mark1: 0,
        mark2: 0,
        mark3: 0,
        average: 0,
    },
}

const getParsedValue = (field) => {
    let value = JSON.parse(document.getElementById(field)?.value || "")
    console.log(value)
    return value;
}

const handleClick = (e) => {
    if (e.target.id == "rad") {
        e.target.currentValue = e.target.value;
        return false;
    }
    let key = parseInt(e.target.id);
    switch (key) {
        case 1:
            let userInput = getParsedValue("salary");
            resultsJSON[key].salario = (userInput/1.18).toFixed(2);
            break;
        case 2:
            let base = getParsedValue("base");
            let height = getParsedValue("height");
            resultsJSON[key].base = base;
            resultsJSON[key].height = height;
            resultsJSON[key].area = ((base * height)/2).toFixed(2);
            break;
        case 3:
            let values = document.getElementsByName("radiusThree");
            let operation = 1;
            for (let i = 0; i < values.length; i++) {
                if (values[i].checked) {
                    operation = parseInt(values[i].value);
                }
            }
            console.log(values)
            console.log('op', operation)
            let numberOne = getParsedValue("numberOne");
            let numberTwo = getParsedValue("numberTwo");
            let result = 0;
            resultsJSON[key].numberOne = numberOne;
            resultsJSON[key].numberTwo = numberTwo;
            switch (operation) {
                case 1:
                    result = numberOne + numberTwo; 
                    break;
                case 2:
                    result = numberOne - numberTwo; 
                    break;
                case 3:
                    result = numberOne / numberTwo; 
                    break;
                case 4:
                    result = numberOne * numberTwo; 
                    break;
                case 5:
                    result = numberOne % numberTwo; 
                    break;
                default:
                    break;
            }
            resultsJSON[key].result = result.toFixed(2);
            break;
        case 4:
            let hours = getParsedValue("hours");
            let hoursValue = getParsedValue("hoursValue");
            sueldo = hours * hoursValue;
            resultsJSON[key].sueldo = sueldo;
            break;
        case 5:
            let price = getParsedValue("price");
            let IVA = price * 0.19;
            let total = price + IVA;
            resultsJSON[key].price = price;
            resultsJSON[key].IVA = IVA;
            resultsJSON[key].total = total;
            break;
        case 6:
            let maleStudents = getParsedValue("maleStudents");
            let femaleStudents = getParsedValue("femaleStudents");
            let totalStudents = maleStudents + femaleStudents;
            resultsJSON[key].total = totalStudents;
            resultsJSON[key].males = maleStudents/totalStudents;
            resultsJSON[key].females = femaleStudents/totalStudents;
            break;
        case 7:
            let markOne = getParsedValue("markOne");
            let markTwo = getParsedValue("markTwo");
            let markThree = getParsedValue("markThree");
            resultsJSON[key].mark1 = markOne;
            resultsJSON[key].mark2 = markTwo;
            resultsJSON[key].mark3 = markThree;
            resultsJSON[key].average = (markOne + markTwo + markThree)/3;
            break;
        default:
            break;
    }
    return drawDOM(key);
}

addEventListener("click", handleClick)

const drawDOM = (key = 1) => {
    let JSONcontainer = document.getElementById("JSONcontainer");
    JSONcontainer.textContent = JSON.stringify(resultsJSON[key]);
    return false;
}