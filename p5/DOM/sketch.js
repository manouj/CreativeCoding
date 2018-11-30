function setup() {
  // put setup code here
  select("body").style("background-color", "#225486");
  var container0 = createDiv();
  container0.id("container0");
  select("#container0").html("<h1>MewSigma</h1>");
  select("#container0").style("width", "100%");
  select("#container0").style("text-align", "center");

  var cnv = createCanvas(400,400);
  cnv.parent(container0);
}

function draw() {
  // put drawing code here
  background(200);
}
