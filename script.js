function onSubmit(){
    var findMonth = document.getElementById("chooseMonth").value;
    var findDay = document.getElementById("chooseDay").value;
    var name = document.getElementById("myName").value;
    var year = document.getElementById("chooseYear").value;
    year = parseInt(year);
    var sign = determineSign(findMonth, findDay);
    var horoscopePrint = name + determineHoroscope(sign);
    var chineseZodiac = "Your Chinese Zodiac is: " + determineYear(year);
    document.getElementById("chineseZodiac").innerHTML = chineseZodiac;
    console.log(horoscopePrint);
    console.log(year);
    document.getElementById("horoscopePrint").innerHTML = horoscopePrint;
    }

function doDays(month){
    console.log(month);
    var mDays= [31,28,31,30,31,30,31,31,30,31,30,31];
    var result = "";
    for(var i=1; i <= mDays[month-1]; i++){
        result += "<option value ='" +i+"'>" +i+"</option>";
    }
    document.getElementById("chooseDay").innerHTML=result;
}

function determineSign(month, day){
    console.log(day);
    var sign = "";
    if (month == 1) {
        if (day <= 19) {
            return "Capricorn";
        }
        if (day > 19) {
            return "Aquarius";
        }
    }
    if (month == 2) {
        if (day <= 18) {
            return "Aquarius";
        }
        if (day > 18) {
            return "Pisces";
        }
    }
    if (month == 3) {
        if (day <= 20) {
            return "Pisces";
        }
        if (day > 20) {
            return "Aries";
        }
    }
    if (month == 4) {
        if (day <= 19) {
            return "Aries";
        }
        if (day > 19) {
            return "Taurus";
        }
    }
    if (month == 5) {
        if (day <= 20) {
            return "Taurus";
        }
        if (day > 20) {
            return "Gemini";
        }
    }
    if (month == 6) {
        if (day <= 20) {
            return "Gemini";
        }
        if (day > 20) {
            return "Cancer";
        }
    }
    if (month == 7) {
        if (day <= 22) {
            return "Cancer";
        }
        if (day > 22) {
            return "Leo";
        }
    }
    if (month == 8) {
        if (day <= 22) {
            return "Leo";
        }
        if (day > 22) {
            return "Virgo";
        }
    }
    if (month == 9) {
        if (day <= 22) {
            return "Virgo";
        }
        if (day > 22) {
            return "Libra";
        }
    }
    if (month == 10) {
        if (day <= 22) {
            return "Libra";
        }
        if (day > 22) {
            return "Scorpio";
        }
    }
    if (month == 11) {
        if (day <= 21) {
            return "Scorpio";
        }
        if (day > 21) {
            return "Sagittarius";
        }
    }
    if (month == 12) {
        if (day <= 21) {
            return "Sagittarius";
        }
        if (day > 21) {
            return "Capricorn";
        }
    }
}

function determineHoroscope(sign){
    document.getElementById("image").style.display= "block";
    if(sign == "Capricorn"){
        document.getElementById("image").src = "img/Capricorn.png";
        return ", group activities and other social events should keep you busy today, but do not let people distract you from your work.";
    }
    if(sign == "Aquarius"){
        document.getElementById("image").src = "img/Aquarius.png";
        return ", be careful who you talk to today because not everyone is in a happy mood and you could find yourself being yelled at.";
    }
    if(sign == "Pisces"){
        document.getElementById("image").src = "img/Pisces.png";
        return ", you've been working really hard all week, take the weekend to relax and have fun with your friends.";
    }
    if(sign == "Aries"){
        document.getElementById("image").src = "img/Aries.png";
        return ",make sure to think before you speak, because you have a tendancy to just blurt out what comes to mind and that isn't always appropriate.";
    }
    if(sign == "Taurus"){
        document.getElementById("image").src = "img/Taurus.png";
        return ", procrastination is your worst enemy and deadlines are coming up quick, make sure you've finished all your work before you watch another episode of Stranger Things.";
    }
    if(sign == "Gemini"){
        document.getElementById("image").src = "img/Gemini.png";
        return ", you've noticed that you and your bestfriend have been growing apart recently, reach out to them and hangout like the old days.";
    }
    if(sign == "Cancer"){
        document.getElementById("image").src = "img/Cancer.png";
        return ", you have a love interest in sight just make sure you don't come on too strong.";
    }
    if(sign == "Leo"){
        document.getElementById("image").src = "img/Leo.png";
        return ", something has been bothering you recently but you haven't said anything; don't let people walk all over you; speak up and talk to them.";
    }
    if(sign == "Virgo"){
        document.getElementById("image").src = "img/Virgo.png";
        return ", you've been so focused on something that you haven't been able to see that it's right in front of you.";
    }
    if(sign == "Libra"){
        document.getElementById("image").src = "img/Libra.png";
        return ", you're feeling adventurous and you want to switch up your look a little; if you can't decide what to start with maybe try a new haircut!";
    }
    if(sign == "Scorpio"){
        document.getElementById("image").src = "img/Scorpio.png";
        return ", the weekend is coming up and you're tired of partying, taking a day or two to just relax and sleep, it will feel great.";
    }
    if(sign == "Sagittarius"){
        document.getElementById("image").src = "img/Sagittarius.png";
        return ", an ultimatum has been put in front of you. Choose wisely a lot is riding on it.";
    }
}




function determineYear(year){
    if(year == 2008 || year == 1996 || year == 1984 || year == 1972 || year == 1960){
        return "Rat";
    }
    if(year == 2009 || year == 1997 || year == 1985 || year == 1973 || year == 1961){
        return "Ox";
    }
    if(year == 2010 || year == 1998 || year == 1986 || year == 1974 || year == 1962){
        return "Tiger";
    }
    if(year == 2011 || year == 1999 || year == 1987 || year == 1975 || year == 1963){
        return "Rabbit";
    }
    if(year == 2012 || year == 2000 || year == 1988 || year == 1976 || year == 1964){
        return "Dragon";
    }
    if(year == 2013 || year == 2001 || year == 1989 || year == 1977 || year == 1965){
        return "Snake";
    }
    if(year == 2014 || year == 2002 || year == 1990 || year == 1978 || year == 1966){
        return "Horse";
    }
    if(year == 2015 || year == 2003 || year == 1991 || year == 1979 || year == 1967){
        return "Sheep";
    }
    if(year == 2016 || year == 2004 || year == 1992 || year == 1980 || year == 1968){
        return "Monkey";
    }
    if(year == 2017 || year == 2005 || year == 1993 || year == 1981 || year == 1969){
        return "Rooster";
    }
    if(year == 2018 || year == 2006 || year == 1994 || year == 1982 || year == 1970){
        return "Dog";
    }
    if(year == 2019 || year == 2007 || year == 1995 || year == 1983 || year == 1971){
        return "Pig";
    }

}


function createDates(){
    document.getElementById("image").style.display= "none";
    var result = "";
    for(var i = 2017; i >= 1960; i--){
        result += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("chooseYear").innerHTML = result;
}