<?php
  //获取服务器端返回的数据
  $arr = array(
    "name" => "zs",
    "age" => 18
  );

  $result =  json_encode($arr);

  //获取到callback
  $callback = $_GET['callback'];

  //服务器返回的内容：  使用了func包裹了 json的结果  jsonp
  // 不会直接给我们一个json，直接当成script来解析， 返回的是一个函数的调用，json变成函数的参数传递过来。
  echo "$callback($result)";

  sleep(5);




  //jsonp:可以允许访问不同源的网站（第三方一些接口）的数据
?>