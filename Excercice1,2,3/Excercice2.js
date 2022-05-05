date1 = new Date('1998-07-98 00:00:00');
date2 = new Date('2022-05-05 22:16:57');
tmp = date2 - date1

function dateDiff(date1, date2){
    var diff = {}                           
    var tmp = date2 - date1;
 
    tmp = Math.floor(tmp/1000);             
    diff.sec = tmp % 60;                    
 
    tmp = Math.floor((tmp-diff.sec)/60);   
    diff.min = tmp % 60;                    
 
    tmp = Math.floor((tmp-diff.min)/60);    
    diff.hour = tmp % 24;                   
     
    tmp = Math.floor((tmp-diff.hour)/24);   
    diff.day = tmp;
     
    return diff;
}