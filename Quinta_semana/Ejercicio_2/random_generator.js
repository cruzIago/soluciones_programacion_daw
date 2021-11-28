function random_min_max(min, max) {
    let aux_min = min,
        aux_max = max;
    let random_number = 0;

    random_number = Math.random() * aux_max + aux_min;
    random_number = Math.floor(random_number);

    return random_number;
}