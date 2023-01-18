import operate from './doIt';

function isNumber(item) {
    return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   A:String       the A number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
    if (buttonName === 'AC') {
        return {
            total: null,
            A: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.A === '0') {
            return {};
        }
        // If there is an operation, update A
        if (obj.operation) {
            if (obj.A && obj.A !== '0') {
                return { ...obj, A: obj.A + buttonName };
            }
            return { ...obj, A: buttonName };
        }
        // If there is no operation, update A and clear the value
        if (obj.A && obj.A !== '0') {
            return {
                A: obj.A + buttonName,
                total: null,
            };
        }
        return {
            A: buttonName,
            total: null,
        };
    }

    if (buttonName === '.') { // .  =>
        if (obj.A) {
            if (obj.A.includes('.')) { // 0
                return { ...obj };
            }
            return { ...obj, A: `${obj.A}.` };
        }
        if (obj.operation) { // 0.7 *
            return { ...obj, A: '0.' };
        }
        if (obj.total) { // 0
            if (obj.total.includes('.')) {
                return {};
            }
            return { ...obj, A: `${obj.total}.` };
        }
        return { ...obj, A: '0.' };
    }

    if (buttonName === '=') {
        if (obj.A && obj.operation) {
            return {
                total: operate(obj.total, obj.A, obj.operation),
                A: null,
                operation: null,
            };
        }
        // '=' with no operation, nothing to do
        return {};
    }

    if (buttonName === '+/-') {
        if (obj.A) {
            return { ...obj, A: (-1 * parseFloat(obj.A)).toString() };
        }
        if (obj.total) {
            return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    }

    // User pressed an operation after pressing '='
    if (!obj.A && obj.total && !obj.operation) {
        return { ...obj, operation: buttonName };
    }

    // User pressed an operation button and there is an existing operation
    if (obj.operation) {
        if (obj.total && !obj.A) {
            return { ...obj, operation: buttonName };
        }

        if (!obj.total) {
            return { total: 0, operation: buttonName };
        }

        return {
            total: operate(obj.total, obj.A, obj.operation),
            A: null,
            operation: buttonName,
        };
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!obj.A) {
        return { operation: buttonName };
    }

    // save the operation and shift 'A' into 'total'
    return {
        total: obj.A,
        A: null,
        operation: buttonName,
    };
}
