import Food from  "./Food";
import Snake from  "./Food";
import ScorePanel from "./ScorePanel";  

class GameControl { 
  // 定义3个属性(蛇、食物、记分牌)
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  constructor() { 
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()  
    this.init()
  }
  // 初始化游戏方法，调用后游戏即开始
  init() { 
    document.addEventListener("keydown", this.keydownHandler)
  }
  // 创建一个键盘按下的响应方法
  keydownHandler(event: KeyboardEvent) {
    console.log(event.key);
    
    
  }
  
}

export default GameControl