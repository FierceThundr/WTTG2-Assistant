var img, map, con, can, ctx
var data = {
	"hack":{
		"difficulty":0,
		"display":{},
		"levels":[],
		"grid":[],
		"links":[],
		"paths":{
			"node_highlight":"",
			"node_outline":"",
			"node_edge1":"",
			"node_edge2":"",
			"node_edge3":"",
			"node_edge4":"",
			"node_edge5":"",
			"node_edge6":"",
			"node_edge7":"",
			"node_edge8":"",
			"node_connection1":"",
			"node_connection2":"",
			"node_connection3":"",
			"node_connection4":"",
			"node_connection5":"",
			"node_connection6":"",
			"node_connection7":"",
			"node_connection8":""
		}
	}
}

window.onload = function () {
	lay1 = document.getElementById("lay1")
	lay2 = document.getElementById("lay2")
	lay3 = document.getElementById("lay3")
	map = document.getElementById("map")
	con = document.getElementById("con")
	ctx1 = lay1.getContext("2d")
	ctx2 = lay2.getContext("2d")
	node_start(2)
	
	
	var img = document.getElementById('lay3');
	var coords = document.getElementById('coords');
	img.addEventListener('mousemove', function(event){
		coords.innerHTML = "x: " + event.offsetX + "<br/>y: " + event.offsetY;
	});
}

function canvas_resize(i) {
	console.log("Canvas Resize",i)
	con.style.width = i + "px"
	con.style.height = i + "px"
  lay1.width = lay2.width = cnw = lay1.offsetWidth
  lay1.height = lay2.height = cnh = lay1.offsetHeight
}

//Global

function hack_reset() {
	//Wipe both canvases
	//Wipe all buttons from map
	//Return to menu
}

function hack_fail() {
	//cleartimeouts
}

function hack_success() {
	//cleartimeouts
}





//Node

//This hack will be drawn in three layers
//Layer 1: The static layer which includes the basic interface which includes static elements
//Layer 2: The dynamic later which includes moving elements or elements subject to change
//Layer 3: The controls layer which includes all triggers that control the puzzle

function node_start(d) {
	data.hack = {...data.hack,
		...{
			"difficulty":d,
			"display":{
				"offset":10,
				"unit":66
			},
			"levels":[
				null,
				{"size":5,"targets":2,"time":8,"boost":3.0,"warmup":3},
				{"size":5,"targets":3,"time":6,"boost":1.5,"warmup":3},
				{"size":7,"targets":3,"time":8,"boost":3.5,"warmup":3},
				{"size":7,"targets":5,"time":8,"boost":2.5,"warmup":3},
				{"size":9,"targets":5,"time":7.5,"boost":2.0,"warmup":3},
				{"size":9,"targets":7,"time":8.5,"boost":2.5,"warmup":2},
				{"size":11,"targets":7,"time":10,"boost":3.3,"warmup":2},
				{"size":11,"targets":9,"time":10,"boost":3.0,"warmup":2},
				{"size":13,"targets":10,"time":11,"boost":3.2,"warmup":1},
				{"size":13,"targets":14,"time":11,"boost":2.8,"warmup":1}
			]
		}
	}
	
	
	//Generate array pattern with types and targets
	grid = [
		[
			{"type":0,"target":0},
			{"type":1,"target":0},
			{"type":0,"target":0},
			{"type":0,"target":0},
			{"type":0,"target":0}
		],
		[
			{"type":1,"target":0},
			{"type":0,"target":0},
			{"type":0,"target":0},
			{"type":0,"target":0},
			{"type":1,"target":1}
		],
		[
			{"type":0,"target":0},
			{"type":1,"target":0},
			{"type":0,"target":0},
			{"type":0,"target":0},
			{"type":0,"target":0}
		],
		[
			{"type":0,"target":0},
			{"type":1,"target":0},
			{"type":0,"target":1},
			{"type":0,"target":0},
			{"type":0,"target":0}
		],
		[
			{"type":0,"target":0},
			{"type":1,"target":0},
			{"type":0,"target":0},
			{"type":0,"target":1},
			{"type":0,"target":0}
		]
	]
	
	//Link array
	/*
	[
		[0,1],
		[2,3],
		[4,5]
	]
	*/
	//Trigger initial draw of pattern
	//Wait for a moment and give player control
	
	node_drawnodes()
}

function node_drawnodes() {
	//Draws all nodes and interactive elements by iterating through all positions
	
	//Draw base shape with no inner symbol or outline
	//Highlight node if target
	//Draw inner shape
	
	
	
	
	
	
	
	var c = 14
	var s = 29
	var o = 7
	var p = [(o),(o+c),(o+c+s),(o+c+s+c)]
	var s1 = [[p[0],p[1]],[p[0],p[2]],[p[1],p[3]],[p[2],p[3]],[p[3],p[2]],[p[3],p[1]],[p[2],p[0]],[p[1],p[0]]]
	
	var shape1 = `M ${p[0]},${p[1]} L ${p[0]},${p[2]} L ${p[1]},${p[3]} L ${p[2]},${p[3]} L ${p[3]},${p[2]} L ${p[3]},${p[1]} L ${p[2]},${p[0]} L ${p[1]},${p[0]} L ${p[0]},${p[1]}`
	console.log(`HIGHLIGHT`,c,s,o,shape1)
	
	var c = 13
	var s = 27
	var o = 9
	var p = [(o),(o+c),(o+c+s),(o+c+s+c)]
	var s2 = [[p[0],p[1]],[p[0],p[2]],[p[1],p[3]],[p[2],p[3]],[p[3],p[2]],[p[3],p[1]],[p[2],p[0]],[p[1],p[0]]]
	
	var c = 8
	var s = 15
	var o = 20
	var a = p
	var p = [(o),(o+c),(o+c+s),(o+c+s+c)]
	var s3 = [[p[0],p[1]],[p[0],p[2]],[p[1],p[3]],[p[2],p[3]],[p[3],p[2]],[p[3],p[1]],[p[2],p[0]],[p[1],p[0]]]
	
	var shape2 = `M ${a[0]},${a[1]} L ${a[0]},${a[2]} L ${a[1]},${a[3]} L ${a[2]},${a[3]} L ${a[3]},${a[2]} L ${a[3]},${a[1]} L ${a[2]},${a[0]} L ${a[1]},${a[0]} L ${a[0]},${a[1]} Z M ${p[0]},${p[1]} L ${p[0]},${p[2]} L ${p[1]},${p[3]} L ${p[2]},${p[3]} L ${p[3]},${p[2]} L ${p[3]},${p[1]} L ${p[2]},${p[0]} L ${p[1]},${p[0]} L ${p[0]},${p[1]} M ${p[0]},${p[1]} L ${a[0]},${a[1]} M ${p[0]},${p[2]} L ${a[0]},${a[2]} M ${p[1]},${p[3]} L ${a[1]},${a[3]} M ${p[2]},${p[3]} L ${a[2]},${a[3]} M ${p[3]},${p[2]} L ${a[3]},${a[2]} M ${p[3]},${p[1]} L ${a[3]},${a[1]} M ${p[2]},${p[0]} L ${a[2]},${a[0]} M ${p[1]},${p[0]} L ${a[1]},${a[0]}`
	console.log(`MAIN`,c,s,o,shape2)
	
	console.log(JSON.stringify([
		[s2[0],s2[1],s3[1],s3[0]],
		[s2[1],s2[2],s3[2],s3[1]],
		[s2[2],s2[3],s3[3],s3[2]],
		[s2[3],s2[4],s3[4],s3[3]],
		[s2[4],s2[5],s3[5],s3[4]],
		[s2[5],s2[6],s3[6],s3[5]],
		[s2[6],s2[7],s3[7],s3[6]],
		[s2[7],s2[0],s3[0],s3[7]]
	]))
	
	
	
	
	
	
	canvas_resize(data.hack.display.unit * data.hack.levels[data.hack.difficulty].size + (2 * data.hack.display.offset))
	ctx1.translate(data.hack.display.offset,data.hack.display.offset)
	
	grid.forEach(function(r,x) {
		r.forEach(function(v,y) {
			drawposition(x,y,v)
		})
	})
	
	function drawposition(x,y,v) {
		var offset_x = x * data.hack.display.unit
		var offset_y = y * data.hack.display.unit
		
		//Move Drawing to Correct Position
		ctx1.translate(offset_x,offset_y)
		
		//Define Line Width
		ctx1.lineWidth = 1
		
		//Draw Highlight
		if (v.target) {
			ctx1.strokeStyle = "lime"
			ctx1.fillStyle = "lime"
			var path = new Path2D(shape1)
			ctx1.fill(path)
			ctx1.stroke(path)
		}
		
		//Draw the Node
		ctx1.strokeStyle = "rgb(33,48,29)"
		ctx1.fillStyle = "rgb(5,17,5)"
		var path = new Path2D(shape2)
		ctx1.fill(path)
		ctx1.stroke(path)
		
		//Draw the Symbol
		if (v.type) {
			
		} else {
			
		}
		
		//Draw Buttons
		var list = [[[9,22],[9,49],[20,43],[20,28]],[[9,49],[22,62],[28,51],[20,43]],[[22,62],[49,62],[43,51],[28,51]],[[49,62],[62,49],[51,43],[43,51]],[[62,49],[62,22],[51,28],[51,43]],[[62,22],[49,9],[43,20],[51,28]],[[49,9],[22,9],[28,20],[43,20]],[[22,9],[9,22],[20,28],[28,20]]]
		
		list.forEach(function(v,i) {
			var e, t = []
			v.forEach(function(c) {
				c[0] += offset_x + data.hack.display.offset
				c[1] += offset_y + data.hack.display.offset
				t.push(...c)
			})
			e = document.createElement("area")
			e.shape = "poly"
			e.coords = t.join(",")
			e.className = "hack_button"
			e.setAttribute("onclick",`node_linkcreate(${x},${y},${i})`)
			e.setAttribute("onmouseover",`node_linkpreview(${x},${y},${i})`)
			e.setAttribute("onmouseout",`node_linkpreviewout(${x},${y},${i})`)
			map.appendChild(e)
			//console.log(t.join(","))
		})
		
		//Reset Position
		ctx1.translate(offset_x * -1,offset_y * -1)
	}
}

function node_drawlinks() {
	//Clear area
	//Iterate through the link array and create links
	data.hack.links.forEach(function(v,i) {
		//Skip first element
		//Add element i and element i-1 and use that to determine direction of connection
		//Call drawlink with x/y and direction found in prev step
	})
}

function node_drawlink(x,y,r) {
	//Translate canvas to correct x/y offsets
	//Translate canvas to center of node
	//Rotate if necessary
	//Draw link
	//Draw connecting line if necessary
	//Undo translations and rotations
}

function node_linkpreview(x,y,r) {
	console.log("linkpreview",x,y,r)
	//Add highlights to currently hovered connection
		//This only needs to draw the single connector since redrawing will result in erasing it
}

function node_linkpreviewout(x,y,r) {
	console.log("linkpreviewout",x,y,r)
	//Trigger redraw
	node_drawlinks()
}

function node_linkcreate(x,y,r) {
	console.log("linkcreate",x,y,r)
	//Compare target and source for matches in link array
	//If there is multiple matches, delete all elements after the earliest match and append the other node
	//If there is any match, delete all elements in array after the match and append the other node
	//If there is no match, do nothing
}

function node_timerstart(t) {
	//Save current global time
	//Save t as fulltimer
	//Start settimeout to node_timerend() and save a reference
}

function node_timeradd(t) {
	//Clear current setTimeout
	//Add t to fulltimer and save it 
	//Get difference of time of timerstart and now and subtract it from fulltimer
	//Start settimeout with time defined above
}

function node_timerend() {
	//Start a setinterval that jumps up the node tree and reaches the end
	/*
	function(){
		//Check if current index exists in array
			//If so
				//Jump to the position
				//Check if total targets in path matches level's total targets
					//If so
						//Trigger hack success
					//If not
						//Trigger hack failure
			//If not
				//Trigger hack failure
	}
	*/
}





//Stack

//This hack will be drawn in three layers
//Layer 1: The static layer which includes the basic interface which includes static elements
//Layer 2: The dynamic later which includes moving elements or elements subject to change
//Layer 3: The controls layer which includes all triggers that control the puzzle

function stack_start(difficulty) {
	var display = { //content size will be unit*size+(2*offset)
		"offset":10,
		"unit":10
	}
	var levels = [
		null,
		{"size":0,"skulls":0,"stacks":0,"timer":"?"}
	]
	
	//Define content size
	//Generate array pattern with random stacks, skulls, and pusher
	[
		[
			{"content":0},
			{"content":0},
			{"content":0}
		],
		[
			{"content":0},
			{"content":0},
			{"content":0}
		],
		[
			{"content":0},
			{"content":0},
			{"content":0}
		]
	]
	
	//Trigger initial draw of pattern
	//Wait for a moment and give player control
}

function stack_hoverhandler() {
	//Is something held?
		//If not 
			//If tile has pusher or stack
				//Highlight tile
		//If so
			//Show placement highlight
}

function stack_actionhandler() {
	//Is something held?
		//Is the selected location occupied?
			//If not
				//If stack
					//Are x&y coordinates both less than 2 units away from the pusher
						//If so
							//Place the stack in the new position
						//If not
							//Place the stack in the original position
				//If Pusher
					//Place Pusher
			//If so
				//Place the held item back in the original position
			
	//If skull
		//Trigger hack fail
	//If stack
		//Are x&y coordinates both less than 2 units away from the pusher
			//Pick up stack
	//If pusher
		//Pick up pusher
}

function stack_timerstart(t) {
	//Start settimeout to stack_timerend()
}

function stack_timerend() {
	//Trigger hack fail
}





//Mem

//This hack will be drawn in three layers
//Layer 1: The static layer which includes the basic interface which includes static elements
//Layer 2: The dynamic later which includes moving elements or elements subject to change
//Layer 3: The controls layer which includes all triggers that control the puzzle

function mem_start(difficulty) {
	var levels = [
		null,
		{"rounds":0,"length_max":0,"length_min":10}
	]
	var characters = "abcdefghijklmnopqrstuvwxyz".split("")
	
	//Define content size
	
	var solve = [] //Solve will be used to verify player choices
	var order = [] //Order will be used to display the order back
	
	//Trigger initial draw of pattern
	//Call mem_roundstart
}

function mem_roundstart() {
	//Generate length
	//Shuffle character array
	//Redefine timer to start time
	//Slice the first <length> characters from the array to use as the round
	//Trigger draw
	//Display sequence
	//Give player control
}

function mem_roundreplay() {
	//Lock controls
	//Replay current sequence
	//Unlock controls
}

function mem_roundfail() {
	//Pause timer
	//create new sequence
	//Display new sequence
	//Unpause timer
}

function mem_roundhandler(c) {
	//is c equal to scrap sequence index 0?
		//If so
			//Shift character out and mark character as correct
			//Is array length 0?
				//If so
					//Advance round
					//Is there another round
						//If not
							//Trigger success
						//If so
							//call mem_roundstart()
				//If not
					//Continue
		//if not
			//call mem_roundfail()
}

function mem_timerstart(t) {
	//Save start time
	//Save full time
	//Start settimeout to mem_timerend()
}

function mem_timerpause() {
	//Redefine full time as full time minus the difference of current timer minus start time
	//cleartimeout
}

function mem_timerplay() {
	//Start settimeout to mem_timerend() for <full time> seconds
}

function mem_timerend() {
	//Trigger hack fail
}