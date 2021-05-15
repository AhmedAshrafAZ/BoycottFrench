document.addEventListener('SendJsonUrl-amazon', function (e)
{

  let {jsonObj,warningImgUrl,boycottIsraelUrl}=e.detail;
  frenchBrands = jsonObj.frenchBrands 
  israelBrands =  jsonObj.israelBrands

  // lowercase and remove accents
  frenchBrands = frenchBrands.map(s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim())
  israelBrands = israelBrands.map(s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()) 
 

  
  // works for amazon.com  
  let brandSentence = document.querySelector('#bylineInfo')?.innerText.split(":").slice(-1)[0]
  
  
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
