var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);
    
    // Q1 . Get all the countries from the Asia continent /region using the Filter function
    
    var region = result.filter(x=>x.region == "Asia");
    console.log(region.map(x=>x.name));

    // Q2 . Get all the countries with a population of less than 2 lakhs using Filter function
    
    var population = result.filter(x=>x.population < 200000)
    console.log(population.map(x=>x.name));

    // Q3. Print the following details name, capital, flag using forEach function
    
    result.forEach(element => {
        console.log(element.name,element.capital,element.flag);
    });

    // Q4. Print the total population of countries using reduce function.
    
    var total_population = result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(total_population);

    // Q5 . Print the country which uses US Dollars as currency.
    
    var us_dollar = result.filter(x=>{
        if(x.currencies == undefined) {
            return false;
        }
        for(var i = 0 ; i < x.currencies.length ; i++){
            if(x.currencies[i].symbol == "$"){
                return x;
            }
        }
    });
    var us_dollar_countries = us_dollar.map(x => x.name);
    console.log(us_dollar_countries);
    
    
}