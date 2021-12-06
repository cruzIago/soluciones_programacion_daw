/*
 Simple message to prompt to user and retrieve input from them
*/
function simple_user_input(msg) {
    let user_input;
    user_input = prompt(msg);
    return user_input;
}

/*
Prompt to user, show them how to fill/answer and retrieve input from them
*/
function sample_user_input(msg, sample) {
    let user_input;
    user_input = prompt(msg, sample);
    return user_input;
}