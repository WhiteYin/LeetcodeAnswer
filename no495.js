/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var totalTime = 0;
    var len = timeSeries.length;
    if(len>0){
        totalTime=duration;
    }
    var i=0;
    while(i<len-1){
        totalTime+=addPoint(timeSeries[i],timeSeries[i+1],duration);
        i++;
    }
    return totalTime;
};
var addPoint = function(point,nextPoint,duration){
    var destPoint = point+duration-1;
    if(destPoint<nextPoint){
        return duration;
    }else{
        return nextPoint-point;
    }
};