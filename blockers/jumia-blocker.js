document.addEventListener('SendJsonUrl-jumia', function (e)
{
  if(!dataLayer)return  

  let {jsonObj,warningImgUrl}=e.detail;
  frenchBrands = jsonObj.frenchBrands 
  // lowercase and remove accents
  frenchBrands = frenchBrands.map(s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()) 

  let currBrand = dataLayer[0]?.ecommerce?.detail?.products[0]?.brand
  currBrand = currBrand ? currBrand: searchForBrnd(dataLayer,'brand')

  if(currBrand){
    currBrand = currBrand.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()
    if (frenchBrands.indexOf(currBrand)>-1){
      try {
        showWarning(currBrand, warningImgUrl)        
      } catch (error) {
        alert(`${currBrand} is a french brand !`)        
      }
    } 
  }
});
