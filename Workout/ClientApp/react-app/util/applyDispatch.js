// dispatchFunction - функция dispatch (передается как входной параметр функции-второго параметра в connect)
// actionCreators - объект, внутри которого набор функций actionCreator-ов)
// можно передать так { one: actionCreatorsOne, two: actionCreatorsTwo }.
// В результате будет объект, аналогичный по структуре переданному, но все функции внутри actionCreators будут завернуты в вызов dispatchFunction
// Также, если в переданной структуре есть что-либо, кроме функций, оно будет отфильтровано (кроме объектов, в которые вложены другие функции)
const applyDispatch = (dispatchFunction, actionCreators) => {
    const resultObject = {};

    let nestedObj;
    for (let key in actionCreators) {
        const val = actionCreators[key];

        if (val instanceof Function)
            resultObject[key] = (...args) => dispatchFunction(val(...args));
        else if (val instanceof Object) {
            nestedObj = applyDispatch(dispatchFunction, val);

            if (Object.keys(nestedObj).length !== 0)
                resultObject[key] = nestedObj;
        }
    }

    return resultObject;
};

export default applyDispatch;