const drill = extendContent(GenericSmelter, "StrainedGlassFactory", {
    drawLayer: function(tile){
Draw.color(tile.entity.liquids.current().color);
 Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
 Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
 Draw.color();
}
})