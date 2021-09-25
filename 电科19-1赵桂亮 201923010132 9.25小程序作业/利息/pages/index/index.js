// index.js
var start,end,sum,x,i;
data:{
  i:1
}
Page({
  startNum:function(e){
  start=parseFloat(e.detail.value);
},
  endNum:function(e){
  end=parseFloat(e.detail.value);
},
calc:function(){
  sum=start;  x=end;
  for( i=1;i<=5;i++){
    sum=sum*x+sum;
  }
  this.setData({
    sum:sum.toFixed(2)*1
  })
},
}) 