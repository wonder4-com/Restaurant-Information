window.average = (data) => {

    var sum = data.reduce((accumulator, currentObj)=>{
        return accumulator + currentObj.rating
    })
    return sum/data.length;
}


function sortByMonth(){

}

