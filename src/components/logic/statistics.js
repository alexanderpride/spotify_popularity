function statistics(items){

    let max = false;
    let min = false;
    let sum = 0;
    let count = 0;

    for (const item of items){

        const value = parseInt(item.popularity);
        const _max = parseInt(max.popularity);
        const _min = parseInt(min.popularity);

        if (!max || value > _max){
            max = item;
        }

        if (!min || value < _min){
            min = item;
        }

        sum += value;
        count ++;

    }


    const average = sum / count;

    return {

        average: average,
        max: max,
        min: min

    }

};

export default statistics