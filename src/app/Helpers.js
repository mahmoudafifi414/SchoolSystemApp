export const compareArrayDiff = (arr, semesterId) => {
    return (current) => {
        return arr.filter((other) => {
            if (typeof semesterId !== 'undefined' && other.semester_id != semesterId) {
                return false;
            }
            return other.id == current.id
        }).length == 0;
    }
};
export const arr_diff = (a1, a2) => {

    let a = [], diff = [];

    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};