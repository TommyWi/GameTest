class Map {
    constructor(tileSheet,world) {
        this.tileSheet = tileSheet;
        this.world = world;
    }
    render() {
        for (let index = world.map.length - 1; index > -1; index--) {
            var value = world.map[index];

            var sourceX = (value % world.columns) * tileSheet.tileWidth;
            var sourceY = floor(value / tileSheet.columns) * tileSheet.tileHeight;

            var destinationX = (index % world.columns) * tileSheet.tileWidth;
            var destinationY = floor(index / world.columns) * tileSheet.tileHeight;

            let i = tileSheet.image.get(sourceX, sourceY, tileSheet.tileWidth, tileSheet.tileHeight);
            image(i, destinationX, destinationY);

            
        }
    }
}
