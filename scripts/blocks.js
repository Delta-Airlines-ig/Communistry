Events.on(ContentInitEvent, e => {
    Vars.content.block("tree").attributes.set(Attribute.get("wood"), 1);
    Vars.content.block("lumberyard").attribute = Attribute.get("wood");
    
    //credit to aeyama
