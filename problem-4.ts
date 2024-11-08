type Circle = { 
    shape: "circle"; 
    radius: number;
}

type Rectangle = { 
    shape: "rectangle"; 
    width: number; 
    height: number; 
}

function calculateShapeArea(geometry: Circle | Rectangle): number {
    if (geometry.shape === "circle") {
      return Math.PI * geometry.radius * geometry.radius;
    }
    return geometry.width * geometry.height;
  }
  