import {Component, Vue, Watch} from 'vue-property-decorator';
// import moment from 'moment';


@Component({
  computed: {
    bgStyle() {
      return `width: ${this.innerWidth}px; height: ${this.innerHeight}px; top: -${this.offsetTop}px;`
    }
  }
})
export default class App extends Vue {
  innerWidth = 0
  innerHeight = 0
  offsetTop = 0
  offsetLeft = 0
  public day = "00";
  public hour = "00";
  public min = "00";
  public sec = "";
  public timer = "";

//控制倒计时的时间，购买按钮的时间
  public startDate = "2020/04/22 10:00";
  public endDate   = "2020/05/24 18:00";



  public nowDate ="";
  public subTime ="";
  public timeTag;
  public introTag = false;
  // 购买按钮显示控制
  public shopBtn = true;
  public shopBtnFunTag;


  mounted(){
  this.timeFun();
  this.shopBtnFunTag = setInterval(this.showBuyTag,1000);
  this.timeTag = setInterval(this.timeFun, 1000);
  // this.innerWidth = window.innerWidth;
  // this.innerHeight = window.innerHeight;
  // this.offsetTop = (this.$refs.blurback as HTMLElement).offsetTop;
  // this.offsetLeft = (this.$refs.blurback as HTMLElement).offsetLeft;
  // window.addEventListener('resize', () => {
  //   this.innerWidth = window.innerWidth;
  //   this.innerHeight = window.innerHeight;
  //   this.offsetTop = (this.$refs.blurback as HTMLElement).offsetTop;
  //   this.offsetLeft = (this.$refs.blurback as HTMLElement).offsetLeft;
  // })

// 绑定点击事件
//   window.addEventListener('click', () => {
//     this.openURL();
//   })
//  }
//  public openURL() {
//   this.$CowTransferWallpaper.sendCommand('open', 'https://myprotein.tmall.hk/');

this.widthTest = document.body.clientWidth ;
this.heighTest = document.body.clientHeight;
window.addEventListener('resize',()=>{
  this.widthTest = document.body.clientWidth ;
  this.heighTest = document.body.clientHeight;
  //videoClass 为真，长100
})
}//mounted结束
public widthTest;
public heighTest;
public videoClass;
public proportion;





 beforeDestroy(){
  clearInterval(this.timeTag);
  clearInterval(this.shopBtnFunTag);
 }
 closeIntro(){
  this.introTag = false;
}
 openIntro(){
  this.introTag = true;
}
 timeFun(){
  this.getTime();
  this.subTime = this.diffTime(this.nowDate,this.endDate);
  this.changeTime();
 }
 getTime(){
  let now = new Date();
  let year = now.getFullYear();
  let month = (now.getMonth()+1).toString().padStart(2,'0');
  let day = now.getDate().toString().padStart(2,'0');
  let hour = now.getHours().toString().padStart(2,'0');
  let minu = now.getMinutes().toString().padStart(2,'0');
  let str = year + "/" + month +"/" +day+" "+hour+":"+minu;
  this.nowDate = str;
  // this.nowDate = "2020/04/16 10:00";
 }
 changeTime(){
   this.day = this.subTime.slice(0,2);
   this.hour = this.subTime.slice(3,5);
   this.min = this.subTime.slice(7,9);
 }
  diffTime(startDate,endDate) { 
    startDate= new Date();
    endDate = new Date(endDate);

    var diff=endDate.getTime() - startDate.getTime();//时间差的毫秒数 
    //计算出相差天数 
    var days=Math.floor(diff/(24*3600*1000)); 
    //计算出小时数 
    var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数 
    var hours=Math.floor(leave1/(3600*1000)); 
    //计算相差分钟数 
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数 
    var minutes=Math.floor(leave2/(60*1000)); 
    //计算相差秒数 
    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数 
    var seconds=Math.round(leave3/1000); 
    var returnStr = seconds.toString().padStart(2,'0') + "秒";

    //计算秒数
    let secNum = Math.floor((diff/1000)%60).toString().padStart(2,'0');

    if(minutes>=0) { 
        returnStr = minutes.toString().padStart(2,'0') + "分" + returnStr; 
    } 
    if(hours>=0) { 
        returnStr = hours.toString().padStart(2,'0') + "小时" + returnStr; 
    } 
    if(days>=0) { 
        returnStr = days.toString().padStart(2,'0') + "天" + returnStr; 
    }
    if(diff>=0){
      this.sec = secNum;
      return returnStr; 
    }else{
      this.sec = "00";
       return "00天00小时00分00秒"
    }
    
    }


    // 购买按钮控制,运算结果直接改变全局变量shopBtn，true显示，反之不显示
    showBuyTag(){
      let startDate = new Date(this.startDate);
      let endDate = new Date(this.endDate);
      let nowDate = new Date();
      //计算出开始和结束的时间区段，然后拿现在的时间进行比较
      let start = startDate.getTime();
      let end = endDate.getTime();
      let now = nowDate.getTime();
      if(now<=end){
        this.shopBtn = true;
      }else{
        this.shopBtn = false;
      }
    }
    buy(){
      this.$CowTransferWallpaper.sendCommand('openProPage');
    }
  }
