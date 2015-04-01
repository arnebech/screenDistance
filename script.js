
var getThxScreenSizeFor = function(distance) {
    return distance * 0.84;
}

var thxRanges = [{
    from: 3.5,
    to: 5,
    size: 35
},{
    from: 4,
    to: 6,
    size: 40
},{
    from: 5,
    to: 7.5,
    size: 50
},{
    from: 6,
    to: 9,
    size: 60
}];

var getThxRangeScreenSizes = function(distance) {
    var ranges = thxRanges.filter(function(range){
        return range.from <= distance && range.to >= distance;
    });

    return ranges;
}

var getSmpteScreenSizeFor = function(distance) {

    return distance / 1.6263
}

var myViewModel = {
    init: function(){
        this.distance = ko.observable(6.5);
        this.sizeThx = ko.computed(function(){
            var distance = this.distance();
            return getThxScreenSizeFor(distance) * 12;
        }, this);
        this.sizesThxRange = ko.computed(function(){
            var distance = this.distance();
            return getThxRangeScreenSizes(distance); 
        }, this);
        this.sizeSmpte = ko.computed(function(){
            var distance = this.distance();
            return getSmpteScreenSizeFor(distance) * 12; 
        }, this);
    },
    formatInches: function(inches) {
        return Math.round(inches) + '"';
    }
}

myViewModel.init();

document.addEventListener("DOMContentLoaded", function(event) {
    ko.applyBindings(myViewModel);
});

