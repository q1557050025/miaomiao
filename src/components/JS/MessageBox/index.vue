<template>
  <div class="wrapper" id="message-box">
    <div class="message-box">
      <h2>{{title}}</h2>
      <p>{{content}}</p>
      <div class="confirm">
        <span @touchstart="handleCancel">{{cancel}}</span>
        <span @touchstart="handleOk">{{ok}}</span>
      </div>
    </div>
  </div>
</template>

<style>

  #message-box {
    width: 375px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.3);
  }
  #message-box .message-box {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 120px;
    border-radius: 4px;
  }
  #message-box .message-box p{
    flex-grow:1;
    display: flex;
    justify-content: center;
    align-items: center;    
  }
  #message-box .confirm {
    border-top: 1px solid gray;
    display: flex;
    width: 100%;
    height:40px;
    align-items: center;
    justify-content: center;
  }

  #message-box .confirm > span {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;    
  }

  #message-box .confirm > span:last-child {
    border-left: 1px solid gray;
  }
</style>