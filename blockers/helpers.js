function showWarning(brandname, warningImgUrl){
//   console.log(brandname + "is a french brand")
//   alert("A french product")

    var d = document.createElement('div');  
    d.innerHTML = `
        <div style="border: 3px dashed red; text-align:center; z-index:999 !important; position: absolute; top: 30%; left: 30%; margin: -100px 0 0 -150px;">
            <div style=" background-color: yellow;">
                <span id='close' style="position: absolute; top:0px; right:0px; "  onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>
                <h1 style="padding:30px;">${brandname} is a french brand</h1>
                <img src=${warningImgUrl} alt="" srcset="">
            </div>
        </div>
    `
    document.documentElement.prepend(d);

}

function showWarningIsraelBrand(brandname, Url){

        var d = document.createElement('div');  
        d.innerHTML = `
            <div style="padding-top:170px; text-align:center; z-index:999 !important; position: fixed;   left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto;   background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); ">
                <div style="
                FONT-VARIANT-EAST-ASIAN: JIS83;
                background-color: #fefefe;
                width: 40%;
                margin: auto;
                border: 1px solid #888;
                border-radius: 10px;
                ">
                    <span id='close' style="
                    padding: 10px;
                    float: right;
                    font-size: 28px;
                    font-weight: 500;
                    cursor: pointer;
                    "  onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>
                    <h1 style="padding:30px;">${brandname} supports Israel</h1>
                    <p style="font-size: large;">We don't want their bullets to be from our money.<br> Boycotting them will be a strong step from you!</p>
                    <img style="max-width: 40%;" src=${Url} alt="boycott Israel">
                </div>
            </div>
        `
        document.documentElement.prepend(d);
    
}

function searchForBrnd(obj, id) {
  let result = false
  if (typeof obj !== 'object') return false;
  for (prop in obj) {
       if (prop==='brand') return obj[prop]
       else if( obj.hasOwnProperty(prop) && typeof obj[prop] === 'object' ) {
           result = searchForBrnd(obj[prop], id);
           if(result) return result;
           
       }
       else if(obj.hasOwnProperty(prop) && typeof obj[prop] === 'array' ) {
           for (elem in obj[prop]){
              result = searchForBrnd(elem, id);
              if(result) return result;              
           }
       }
   }
   return result;
}