export interface OJType {
  width?: number;
  height?: number;
}
export class Graph {
  public width: number;
  public height: number;

  constructor(width?: number, height?: number);
  constructor(side?: OJType);
  constructor(v1: any, v2?: any) {
    if (typeof v1 === 'object') {
      this.width = v1.width;
      this.height = v1.height;
    } else {
      this.width = v1;
      this.height = v2;
    }
  }

  getArea() {
    const { width, height } = this;
    return width * height;
  }
}

const g = new Graph(10, 10);
console.log(g.getArea());
console.log('------');
const g1 = new Graph({ width: 11, height: 12 });
console.log(g1.getArea());
