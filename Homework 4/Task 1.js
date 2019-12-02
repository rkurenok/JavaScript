function deepEqual(obj1, obj2)
{
    if(typeof obj1 == typeof obj1)
    {
        if(typeof obj1 == "object" && obj1 != null)
        {
            let equals = true;

            for (let property in obj1) {

                if(obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) // Проверить, оба ли сравниваемые объекты имеют это свойства
                {
                    if(!deepEqual(obj1[property], obj2[property])) //сравнить свойства
                    {
                        equals = false;
                    }
                }
                else
                {
                    equals = false;  // если не у каждого - поставить значение переменной
                }
            }

            return equals;
        }
        else
        {
            return obj1 === obj2;
        }
    }
    else
    {
        return false;
    }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
