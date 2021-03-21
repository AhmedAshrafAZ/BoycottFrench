document.addEventListener('SendJsonUrl', function (e)
{

  let {jsonObj,warningImgUrl}=e.detail;
  frenchBrands = jsonObj.frenchBrands 
  // lowercase and remove accents
  frenchBrands = frenchBrands.map(s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()) 

  
  // works for amazon.com  
  let brandSentence = document.querySelector('#bylineInfo')?.innerText.split(":").slice(-1)[0]
  
  
  if(brandSentence){
    brandSentence = brandSentence.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()    
    foundAtIndex = frenchBrands.findIndex(b=>brandSentence.includes(b))
    if(foundAtIndex>-1){
      try {
        showWarning(frenchBrands[foundAtIndex], warningImgUrl)        
      } catch (error) {
        alert(`${frenchBrands[foundAtIndex]} is a french brand !`)        
      }
    } 
  }
});
