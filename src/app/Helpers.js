export const compareArrayDiff = (arr, semesterId) => {
    return (current) => {
        return arr.filter((other) => {
            if (typeof semesterId !== 'undefined' && other.semester_id != semesterId){
                return false;
            }
            return other.id == current.id
        }).length == 0;
    }
};