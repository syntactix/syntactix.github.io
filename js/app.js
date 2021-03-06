$(document).foundation();

$(document).ready(function() {
  console.log("%cLike what you see?", "color: red; font-size: x-large");
  console.log("Email me ;) ccrunner2013@gmail.com");
  var lookup = {
    1: "high school",
    2: "freshman",
    3: "sophomore",
    4: "present"
  };
  var picLookup = {
    "high school": "me_highschool",
    "freshman": "me_freshman",
    "sophomore": "me_sophomore",
    "present": "me_junior"
  };
  var newPicture = function(byId) {
    var visible = $("#crane-banner img.is-visible");
    var newlyVisible = picLookup[document.getElementById(byId).value];
    if (newlyVisible !== visible.id) {
      visible.removeClass("is-visible");
      visible.addClass("is-hidden");
      $("#"+newlyVisible).addClass("is-visible");
      $("#"+newlyVisible).removeClass("is-hidden");
    }
  }
  $("#lower-timeline").change(function() {
    newPicture("lower-timeline");
  });
  $("#upper-timeline").change(function() {
    newPicture("upper-timeline");
  });
  var slider = document.getElementById('timeline-slider');
  noUiSlider.create(slider, {
  	start: [1, 4],
    step: 1,
  	connect: true,
  	range: {
  		'min': 1,
  		'max': 4
  	}
  });
  slider.noUiSlider.on('update', function( values, handle ) {
    // Create a new 'change' event
    var event = new Event('change');
    if ( !handle ) {
  		document.getElementById("lower-timeline").value = lookup[parseInt(values[handle])];
      document.getElementById("lower-timeline").dispatchEvent(event);
  	} else {
  		document.getElementById("upper-timeline").value = lookup[parseInt(values[handle])];
      document.getElementById("upper-timeline").dispatchEvent(event);
  	}
  });

});
