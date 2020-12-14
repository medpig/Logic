var con = 0;
var co = 0;
const Oriole = extendContent(UnitType, "Oriole", {
   load() {
    this.super$load();
   }
   
  });
  
  Oriole.constructor = prov(() => extend (LegsUnit, {
    draw(){
this.super$draw()
if (con >= 0 && con < 50){co=0} else
if (con >= 50 && con < 100){co=0.25} else
if (con >= 100 && con < 150){co=0.5} else
if (con >= 150 && con < 250){co=0.75} else
if (con > 250){co=1}
Draw.color(Color.valueOf("FF0000"), Color.valueOf("00FF00"), co);
Draw.rect(Core.atlas.find(Oriole.name +"-bar"), this.x, this.y, this.rotation - 90);
},

update(){
  this.super$update()
  var tile = Vars.world.tileWorld(this.x, this.y)
  if(tile.floor().liquidDrop == Liquids.water){
    if (con>=300){
      Vars.content.getByName(ContentType.unit, "logic-Betty").spawn(this.team, this.x, this.y);
        con = 0;
    } else {
      if(tile.floor().liquidDrop == Liquids.water){
      con++}
      }
  } else {con = 0}
}
}))