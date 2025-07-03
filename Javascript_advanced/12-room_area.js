const roomDimensions = {
    width: 50,
    height: 100,
    getArea : function() {
        return this.height * this.width;
    }
}

const area = roomDimensions.getArea;

const boundGetArea = area.bind(roomDimensions);