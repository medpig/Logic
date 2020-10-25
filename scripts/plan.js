const plGenerator = extend(SerpuloPlanetGenerator, {
    
    //здесь код генерации, этот не расширять, его нельзя, переименовать в PlanetGenerator
    
});
const pl = new JavaAdapter(Planet, {}, "Sedius", Planets.sun, 4, 1);
pl.generator = plGenerator;
//это отвечает за сектора(пока не работает)
pl.meshLoader = prov(() => new HexMesh(pl, 6));
//цвет
pl.atmosphereColor = Color.valueOf("28ECB7");
//это пока недоступно
pl.startSector = 15;