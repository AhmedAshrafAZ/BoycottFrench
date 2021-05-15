document.addEventListener('SendJsonUrl-ebay', function (e)
{
  let {jsonObj,warningImgUrl,boycottIsraelUrl}=e.detail;
  frenchBrands = jsonObj.frenchBrands 
  israelBrands =  jsonObj.israelBrands

  // lowercase and remove accents
  frenchBrands = frenchBrands.map(s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()) 
  israelBrands = israelBrands.map(s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()) 


  
  // works for amazon.com  
  let rows = document.querySelectorAll('#viTabs_0_pd tbody tr')
  rows = rows.length > 0 ? rows : document.querySelectorAll('#viTabs_0_is tbody tr')
  
  let brandSentence = rows.length > 0 ? Array.prototype.slice.call(rows).find(r=>r.innerText.includes("Brand")).innerText.split(/\s/g).slice(1).join(" "):null    
  
  if(brandSentence){
    brandSentence = brandSentence.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()    
    foundAtIndex = frenchBrands.findIndex(b=>brandSentence.includes(b))

    // israelBrands part
    currIsraelBrand = israelBrands.findIndex(b=>brandSentence.includes(b))

    if(foundAtIndex>-1){
      try {
        showWarning(frenchBrands[foundAtIndex], warningImgUrl)        
      } catch (error) {
        alert(`${frenchBrands[foundAtIndex]} is a french brand !`)        
      }
    } 
    // israelBrands part
    else if(currIsraelBrand>-1){
      try {
        showWarningIsraelBrand(israelBrands[currIsraelBrand], boycottIsraelUrl)        
      } catch (error) {
        alert(`${israelBrands[currIsraelBrand]} is an Israeli brand !`)     
      }
    }
  }
});
