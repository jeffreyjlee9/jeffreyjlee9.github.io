function main(){
	$('.type-it').typeIt({
     					strings: ["entrepreneurship v. (corporate) ladder . . . ",
     						"our generation's disruptive technologies  . . . ",
     						"why smart people pursue finance and consulting . . . ",
     						"early-stage investor fear . . . ",
     						"generating and validating start-up ideas . . . ",
     						"the 4 types of intelligence . . . "],
     					speed: 80,
     					deleteSpeed: 20,
     					breakDelay: 900,
     					breakLines: false,
     					autoStart: false,
     					loop: true,
     					lifeLike: true
					})
}
$(document).ready(main);