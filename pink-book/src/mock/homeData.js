//模拟请求时间
const dely = (t) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t);
  });
}


const exploreCardMock = async (nums = 20) => {
  await dely(2000)
  return new Array(nums).fill(1).map((a, i) => {
    let r = Math.random()
    r = Math.floor(r * 9) + 1 //[1, 9]
    return {
      id: i,
      isVideo: Math.random() > 0.5 ? 1 : 1,
      imageUrl: "src/mock/images/image" + r + ".JPG",
      content: r % 2 != 0 ? "我出来打工，不惦记钱，惦记什么？ ###武林外传###" : "你诽谤哦，他诽谤哦 ###唐人街探案###",
      avatar: "src/mock/images/image" + r + ".JPG",
      autor: "Thexu" + r,
      likeCount: Math.floor(Math.random() * 1000),
    };
  });
};

export { exploreCardMock };
