
class ScorePanel {
  // 设置分数和等级
  score = 0
  level = 0
  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreElement : HTMLElement
  levelElement: HTMLElement
  // 设置一个变量来限制等级
  maxLevel: number
  // 设置一个变量来表示多少分数时可以升级
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) { 
    this.scoreElement = document.getElementById("score")!
    this.levelElement = document.getElementById("level")!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }
  // 设置一个加分的方法
  addScore() {
    this.scoreElement.innerHTML = ++this.score + ""
    if (this.score % this.upScore == 0) {
      this.levelUp()
    }
  }
  // 提升等级的方法
  levelUp() { 
    if (this.level < this.maxLevel) { 
      this.levelElement.innerHTML = ++ this.level + ""
    }
  }
}
export default ScorePanel

