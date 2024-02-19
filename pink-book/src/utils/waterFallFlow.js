/**
 * @description 自动计算瀑布流的位置：每个card使用的是绝对定位，只需要计算每个card的偏移量
 */

const computeWaterFallFlow = (ref, colums = 2) => {
    let resizeListener = null

    const computeCard = () => {
        const cards = ref.children
        const winWidth = window.innerWidth //当前视域宽度
        const margin = Math.round(winWidth * 0.015) //card之间的间距
        const cardWidth = Math.floor((winWidth - (colums + 1) * margin) / colums)
        
        const topList = new Array(colums).fill(0) //记录每一列的当前顶部宽度

        //给每个card赋予宽度，因为card中的imag高度会随宽度自适应，所以每个card高度会自适应
        for(let i = 0; i < cards.length; i++) {
            cards[i].style.width = cardWidth + 'px'
        }

        //计算每个card的位置偏移    
        for (let i = 0; i < cards.length; i++) {
            //判断当前最高的那一列
            let min = Math.min(...topList)
            const minColum = topList.indexOf(min)

            //计算card的偏移量
            let left = margin * (minColum + 1) + cardWidth * minColum
            let top = min + margin
            cards[i].style.transform = `translate(${left}px, ${top}px)`
            topList[minColum] += cards[i].clientHeight + margin
        }
        ref.style.height = Math.max(...topList) + margin +'px'
    }
    computeCard()

    //监听resize事件
   if(!resizeListener) {
    resizeListener =window.addEventListener('resize', () => {
        computeCard()
    })   

   }
}   

export default computeWaterFallFlow