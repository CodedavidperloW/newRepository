
function age(){
    var h1 = document.getElementById("hour").value;
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    var mn1 = document.getElementById("minute").value;
    var s1 = document.getElementById("seconds").value

    var date = new Date();
    var s2 = date.getSeconds();
    var mn2 = date.getMinutes();
    var h2 = date.getHours();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth(); //why are we adding a 1 here?
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1>d2){
        d2 = d2 + month[m2-1];
        m2 = m2 - 1
    }
    if (m1>m2){
        m2 = m2 + 12; //not sure why they add 12 here.
        y2 = y2 - 1; // this will give the amount of years.
    }
    if (s1>s2){
        s2= s2+60
        mn2= mn2-1 // I am not 100% sure on this logic but trying.
    }
    if(mn1>mn2){
        mn2= mn2+60;
        h2=h2-1
    }
    if(h1>h2){
        h2= h2+24;
        d2=d2-1;
    }
    var d = d2 - d1;  //   current date + [plus Current Month - 1 day]
    var m = m2 - m1;  //   current month plus one (which is to include that month) - month selected 
    var y = y2 -y1;     // current year minus year that was chosen
    var h = h2 -h1;
    var mn = mn2 -mn1;
    var s = s2-s1;
    document.getElementById('age').innerHTML = `Your age is ${y} years, ${m} months, ${d} days, ${h} hours, ${mn} minutes and ${s} seconds.`;
}