class Square{
    private width: number
    private height: number
    private bg: string
    constructor(width:number,height:number,bg:string){
        this.width = width
        this.height = height
        this.bg = bg
    }

    public draw(){
        const body = document.querySelector('body')
        const box = document.createElement('div')

        const randomX = Math.floor(Math.random() * (window.innerWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight));


        box.style.width = `${this.width}px`;
        box.style.height = `${this.height}px`;
        box.style.background = this.bg;


        box.style.position = 'absolute'; 
        box.style.left = `${randomX}px`;
        box.style.top = `${randomY}px`;


        document.body?.appendChild(box);
    }
}
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
