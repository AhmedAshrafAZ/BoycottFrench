document.addEventListener('SendJsonUrl-israelWebsites', function (e)
{
    let {boycottIsraelUrl}=e.detail;
    // Israeli websites part
    if(window.location.href.includes("wix.com")){
        try {
            showWarningIsraelBrand("wix.com", boycottIsraelUrl)        
        } catch (error) {
            alert(`wix.com is an Israeli brand !`)        
        }
    } else if(window.location.href.includes("fiverr.com")){
        try {
            showWarningIsraelBrand("fiverr.com", boycottIsraelUrl)        
        } catch (error) {
            alert(`fiverr.com is an Israeli brand !`)        
        }
    } else if(window.location.href.includes("myheritage.com")){
        try {
            showWarningIsraelBrand("myheritage.com", boycottIsraelUrl)        
        } catch (error) {
            alert(`myheritage.com is an Israeli brand !`)        
        }
    } else if(window.location.href.includes("viber.com")){
        try {
            showWarningIsraelBrand("viber.com", boycottIsraelUrl)        
        } catch (error) {
            alert(`viber.com is an Israeli brand !`)        
        }
    } else if(window.location.href.includes("elementor.com")){
        try {
            showWarningIsraelBrand("elementor.com", boycottIsraelUrl)        
        } catch (error) {
            alert(`elementor.com is an Israeli brand !`)        
        }
    } else if(window.location.href.includes("monday.com")){
        try {
            showWarningIsraelBrand("monday.com", boycottIsraelUrl)        
        } catch (error) {
            alert(`monday.com is an Israeli brand !`)        
        }
    }

});
