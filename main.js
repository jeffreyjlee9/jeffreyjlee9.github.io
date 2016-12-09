function main(){
	$('.type-it').typeIt({
     					strings: ["generating start-up ideas . . . ",
     						"the Fractured States of America . . . ",
     						"why smart people pursue finance and consulting . . . ",
     						"early-stage investor fear . . . ",
     						"our generation's disruptive technologies . . . ",
     						"the 4 types of intelligence . . . "],
     					speed: 120,
     					deleteSpeed: 25,
     					breakDelay: 900,
     					breakLines: false,
     					autoStart: false,
     					loop: true,
     					lifeLike: true
					})
}
$(document).ready(main);