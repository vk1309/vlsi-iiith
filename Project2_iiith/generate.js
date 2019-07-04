var x=$(".simcir_outer_div").width();
x=x*0.80;


if(sessionStorage.getItem("cmos"))
{
	var cmo={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		{"type":"Joint"},
		{"type":"DC"},
		{"type":"LED"},
		{"type":"PushOff"},
		{"type":"Toggle"},
		{"type":"OSC"},
		{"type":"JK-FF"},
		{"type":"T-FF"},
		{"type":"DSO","numInputs":8}
		],
		"devices":[
		{"type":"T-FF","id":"dev0","x":184,"y":16,"label":"T-FF"},
		{"type":"T-FF","id":"dev1","x":184,"y":64,"label":"T-FF"},
		{"type":"T-FF","id":"dev2","x":184,"y":112,"label":"T-FF"},
		{"type":"T-FF","id":"dev3","x":184,"y":160,"label":"T-FF"},
		{"type":"T-FF","id":"dev4","x":184,"y":208,"label":"T-FF"},
		{"type":"T-FF","id":"dev5","x":184,"y":256,"label":"T-FF"},
		{"type":"T-FF","id":"dev6","x":184,"y":304,"label":"T-FF"},
		{"type":"T-FF","id":"dev7","x":184,"y":352,"label":"T-FF"},
		{"type":"Out","id":"dev8","x":264,"y":64,"label":"D1"},
		{"type":"Out","id":"dev9","x":264,"y":112,"label":"D2"},
		{"type":"Out","id":"dev10","x":264,"y":160,"label":"D3"},
		{"type":"Out","id":"dev11","x":264,"y":208,"label":"D4"},
		{"type":"Out","id":"dev12","x":264,"y":256,"label":"D5"},
		{"type":"Out","id":"dev13","x":264,"y":304,"label":"D6"},
		{"type":"Out","id":"dev14","x":264,"y":352,"label":"D7"},
		{"type":"In","id":"dev15","x":120,"y":16,"label":"T"},
		{"type":"In","id":"dev16","x":120,"y":112,"label":"CLK"},
		{"type":"DSO","numInputs":8,"id":"dev17","x":424,"y":88,"label":"DSO","state":{"playing":true,"rangeIndex":0}},
		{"type":"Out","id":"dev18","x":264,"y":16,"label":"D0"},
		{"type":"OSC","id":"dev19","x":24,"y":144,"label":"OSC"},
		{"type":"DC","id":"dev20","x":24,"y":32,"label":"DC"}
		],
		"connectors":[
		{"from":"dev0.in0","to":"dev15.out0"},
		{"from":"dev0.in1","to":"dev16.out0"},
		{"from":"dev1.in0","to":"dev15.out0"},
		{"from":"dev1.in1","to":"dev0.out0"},
		{"from":"dev2.in0","to":"dev15.out0"},
		{"from":"dev2.in1","to":"dev1.out0"},
		{"from":"dev3.in0","to":"dev15.out0"},
		{"from":"dev3.in1","to":"dev2.out0"},
		{"from":"dev4.in0","to":"dev15.out0"},
		{"from":"dev4.in1","to":"dev3.out0"},
		{"from":"dev5.in0","to":"dev15.out0"},
		{"from":"dev5.in1","to":"dev4.out0"},
		{"from":"dev6.in0","to":"dev15.out0"},
		{"from":"dev6.in1","to":"dev5.out0"},
		{"from":"dev7.in0","to":"dev15.out0"},
		{"from":"dev7.in1","to":"dev6.out0"},
		{"from":"dev8.in0","to":"dev1.out0"},
		{"from":"dev9.in0","to":"dev2.out0"},
		{"from":"dev10.in0","to":"dev3.out0"},
		{"from":"dev11.in0","to":"dev4.out0"},
		{"from":"dev12.in0","to":"dev5.out0"},
		{"from":"dev13.in0","to":"dev6.out0"},
		{"from":"dev14.in0","to":"dev7.out0"},
		{"from":"dev15.in0","to":"dev20.out0"},
		{"from":"dev16.in0","to":"dev19.out0"},
		{"from":"dev17.in0","to":"dev18.out0"},
		{"from":"dev17.in1","to":"dev8.out0"},
		{"from":"dev17.in2","to":"dev9.out0"},
		{"from":"dev17.in3","to":"dev10.out0"},
		{"from":"dev17.in4","to":"dev11.out0"},
		{"from":"dev17.in5","to":"dev12.out0"},
		{"from":"dev17.in6","to":"dev13.out0"},
		{"from":"dev17.in7","to":"dev14.out0"},
		{"from":"dev18.in0","to":"dev0.out0"}
		]
	};

	
	
	if(sessionStorage.getItem("cmos_module"))
	{
		$("#cmos").attr("checked", true);
		counter.toolbox.push({
			"type":"cmos"
		});
	}

	if(sessionStorage.getItem("pmos"))
	{
		$("#pmos").attr("checked", true);
		counter.toolbox.push({
			"type":"pmos"
		});
	}
	
	var html1=JSON.stringify(cmo);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");

}

else if(sessionStorage.getItem("pmos")){
	var cmo={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		{"type":"Joint"},
		{"type":"DC"},
		{"type":"LED"},
		{"type":"PushOff"},
		{"type":"Toggle"},
		{"type":"OSC"},
		{"type":"JK-FF"},
		{"type":"T-FF"},
		{"type":"DSO","numInputs":8}
		],
		"devices":[
		{"type":"T-FF","id":"dev0","x":232,"y":32,"label":"T-FF"},
		{"type":"T-FF","id":"dev1","x":232,"y":128,"label":"T-FF"},
		{"type":"Toggle","id":"dev2","x":80,"y":120,"label":"Toggle","state":{"on":true}},
		{"type":"DC","id":"dev3","x":24,"y":176,"label":"DC"},
		{"type":"T-FF","id":"dev4","x":232,"y":312,"label":"T-FF"},
		{"type":"T-FF","id":"dev5","x":232,"y":216,"label":"T-FF"},
		{"type":"OSC","id":"dev6","x":40,"y":256,"label":"OSC"},
		{"type":"LED","id":"dev7","x":408,"y":40,"label":"LED"},
		{"type":"LED","id":"dev8","x":408,"y":136,"label":"LED"},
		{"type":"LED","id":"dev9","x":408,"y":232,"label":"LED"},
		{"type":"LED","id":"dev10","x":408,"y":328,"label":"LED"}
		],
		"connectors":[
		{"from":"dev0.in0","to":"dev4.out0"},
		{"from":"dev0.in1","to":"dev6.out0"},
		{"from":"dev0.in2","to":"dev3.out0"},
		{"from":"dev0.in3","to":"dev2.out0"},
		{"from":"dev1.in0","to":"dev0.out0"},
		{"from":"dev1.in1","to":"dev6.out0"},
		{"from":"dev1.in2","to":"dev2.out0"},
		{"from":"dev1.in3","to":"dev3.out0"},
		{"from":"dev2.in0","to":"dev3.out0"},
		{"from":"dev4.in0","to":"dev5.out0"},
		{"from":"dev4.in1","to":"dev6.out0"},
		{"from":"dev4.in2","to":"dev2.out0"},
		{"from":"dev4.in3","to":"dev3.out0"},
		{"from":"dev5.in0","to":"dev1.out0"},
		{"from":"dev5.in1","to":"dev6.out0"},
		{"from":"dev5.in2","to":"dev2.out0"},
		{"from":"dev5.in3","to":"dev3.out0"},
		{"from":"dev7.in0","to":"dev0.out0"},
		{"from":"dev8.in0","to":"dev1.out0"},
		{"from":"dev9.in0","to":"dev5.out0"},
		{"from":"dev10.in0","to":"dev4.out0"}
		]
	};
	
	if(sessionStorage.getItem("cmos_module"))
	{
		$("#cmos").attr("checked", true);
		counter.toolbox.push({
			"type":"cmos"
		});
	}

	if(sessionStorage.getItem("pmos_module"))
	{
		$("#pmos").attr("checked", true);
		counter.toolbox.push({
			"type":"pmos"
		});
	}
	var html1=JSON.stringify(cmo);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}

else{
	var pmo={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		{"type":"Joint"},
		{"type":"DC"},
		{"type":"LED"},
		{"type":"PushOff"},
		{"type":"Toggle"},
		{"type":"OSC"},
		{"type":"JK-FF"},
		{"type":"T-FF"},
		{"type":"DSO", "numInputs":8}
		],
		"devices":[
		],
		"connectors":[
		]
	};
	if(sessionStorage.getItem("cmos_module"))
	{
		$("#cmos").attr("checked", true);
		obj.toolbox.push({
			"type":"cmos"
		});
	}

	if(sessionStorage.getItem("pmos_module"))
	{
		$("#pmos").attr("checked", true);
		obj.toolbox.push({
			"type":"pmos"
		});
	}

	var html=JSON.stringify(pmo);
	document.querySelector(".simcir").innerHTML=html;
}


$("#cmos").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("cmos_module",1);
	}
	else
	{
		sessionStorage.removeItem("cmos_module");
	}
});

$("#pmos").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("pmos_module",1);
	}
	else
	{
		sessionStorage.removeItem("pmos_module");
	}
});


$("#load_circuit").click(function(event) {
	sessionStorage.setItem("pmos",1);
	sessionStorage.removeItem("pmos");
	location.reload();
});

$("#freq").change(function(event) {
	sessionStorage.setItem("freq", parseInt(this.value,10));
});

$("#clear_grid").click(function(event) {
	sessionStorage.clear();
});
