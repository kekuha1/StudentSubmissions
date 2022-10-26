let submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}

];
function addSubmission(array, newName, newScore, newDate){
    let object = {};
    object.name = newName;
    object.score = newScore;
    object.date = newDate;
    if (newScore >= 60){
        object.passed = true;

    }
    else {
        object.passed = false;
    }
    array.push(object);
    
}
function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);

}
function deleteSubmissionByName(array, name){
    array.splice(array.findIndex((n)=> n.name == name), 1);

}
function editSubmission(array, index, score){
    array[index].score = score;
    if(score >= 60){
        array [index].passed = true;
    }
    else{
        array [index].passed = false;
    }
}
function findSubmissionByName(array, name){
    return array.find((n)=> n.name == name);
}
function findLowestScore(array){
    let min = 100;
    let object = {};
    array.forEach((n)=>{
        if(n.score < min){
            min = n.score;
            object = n;
        }
    }) ;
    return object;
}
function findAverageScore(array){
    let sum = 0;
    for( n of array){
        sum += n.score;
    }
    return sum / array.length;
}
function filterPassing(array){
    return array.filter(n => n.passed);

}
function filter90AndAbove(array){
    return array.filter(n => n.score >= 90);

}
console.log(submissions);
addSubmission(submissions, "Jane", 77, "2019-07-05");
console.log(submissions);
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);
deleteSubmissionByName(submissions, "Joe");
console.log(submissions);
editSubmission(submissions, 2, 57);
console.log(submissions);
console.log(findSubmissionByName(submissions, "Jill"));
console.log(findLowestScore(submissions));
console.log(findAverageScore(submissions));
console.log(filterPassing(submissions));
console.log(filter90AndAbove(submissions));
