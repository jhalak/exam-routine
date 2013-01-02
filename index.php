<?php
if ($_GET['action'] == 'home') {
  //echo 'asdfasdfasdf';
  $data = array('Helo angular');
  echo prepareJsonOutput(1, $data);
}


function prepareJsonOutput($success,$data){
  return json_encode(array('success'=>$success,'data'=>$data));
}