$.fn.waterfall = function () {
  //1. 找对象
  var $item = this.children();//子元素
  var boxWidth = this.width();//父元素宽度
  var itemWidth = $item.width();//子元素宽度

  //2. 计算间歇
  var column = 5;
  var gap = (boxWidth - column * itemWidth) / (column - 1);
  console.log(gap);

  //3. 遍历子元素进行布局
  //定义一个数组，数组记录每一列的高度
  var arr = [0, 0, 0, 0, 0];
  $item.each(function (i, e) {
    var min = arr[0];
    var minIndex = 0;
    arr.forEach(function (e, i) {
      if (min > e) {
        min = e;
        minIndex = i;
      }
    });
    //设置最小列的位置
    $(this).css({
      left: minIndex * (itemWidth + gap),
      top: min
    });
    //更新数组的值
    arr[minIndex] = min + $(this).height() + gap;
  });
  //4. 更新父盒子的高度
  this.height(Math.max.apply(null, arr));
}

// //缁檍Query鐨勫師鍨嬪鍔犳柟娉�
// $.fn.waterfall = function () {
//   //1. 鎵惧埌鐖剁洅瀛愬拰鎵€鏈夌殑瀛愮洅瀛�
//   //2. 鏍规嵁鐖剁洅瀛愬拰瀛愮洅瀛愮殑瀹藉害璁＄畻鍑烘潵 闂存瓏
//   var $box = this;  //鐖剁洅瀛�

//   var $item = $box.children(); //鎵€鏈夌殑瀛愮洅瀛�
//   var boxWidth = $box.width(); //鐖剁洅瀛愮殑瀹藉害
//   var itemWidth = $item.width(); //瀛愮洅瀛愮殑瀹藉害
//   var column = 5;//涓€鍏辨湁5鍒�
//   var gap = (boxWidth - column * itemWidth) / (column - 1);//mind the 

//   var arr = [0, 0, 0, 0, 0];//璁板綍姣忎竴鍒楃殑楂樺害
//   $item.each(function (i, e) {
//     var min = Math.min(...arr);//鏈€灏忓€�
//     var minIndex = arr.indexOf(min);//鏈€灏忎笅鏍�

//     //璁剧疆鍏冪礌鐨刲eft鍜宼op
//     $(this).css({
//       left: minIndex * (itemWidth + gap),
//       top: min
//     });

//     //璁剧疆瀹屾垚 涔嬪悗锛岄渶瑕佷慨鏀规暟缁勭殑鏈€灏忓垪鐨勫€�
//     arr[minIndex] = min + $(this).height() + gap;
//   });
//   //鍔ㄦ€佺殑璁剧疆鐖剁洅瀛恇ox鐨勯珮搴�,鑾峰彇鍒版暟缁勪腑鐨勬渶澶у€煎嵆鍙�
//   //鐩殑锛氭眰arr鐨勬渶澶у€�
//   var max = Math.max(...arr);
//   $box.height(max);
// };
