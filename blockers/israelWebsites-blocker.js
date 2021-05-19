document.addEventListener('SendJsonUrl-israelWebsites', function (e)
{
    let {boycottIsraelUrl}=e.detail;
    const href = window.location.href;
    const findTerm = (term) => {
        if (href.includes(term)){
            return href;
        }
    };

    // Israeli websites part
    switch (href){
        case findTerm('wix'):
            try {
                showWarningIsraelBrand("wix", boycottIsraelUrl)        
            } catch (error) {
                alert(`wix is an Israeli brand !`)        
            }
            break;
        case findTerm('fiverr'):
            try {
                showWarningIsraelBrand("fiverr", boycottIsraelUrl)        
            } catch (error) {
                alert(`fiverr.com is an Israeli brand !`)        
            }
            break;
        case findTerm('myheritage'):
            try {
                showWarningIsraelBrand("myheritage", boycottIsraelUrl)        
            } catch (error) {
                alert(`myheritage is an Israeli brand !`)        
            }
            break;
        case findTerm('viber'):
            try {
                showWarningIsraelBrand("viber", boycottIsraelUrl)        
            } catch (error) {
                alert(`viber is an Israeli brand !`)        
            }
            break;
        case findTerm('elementor'):
            try {
                showWarningIsraelBrand("elementor", boycottIsraelUrl)        
            } catch (error) {
                alert(`elementor is an Israeli brand !`)        
            }
            break;
        case findTerm('monday'):
            try {
                showWarningIsraelBrand("monday", boycottIsraelUrl)        
            } catch (error) {
                alert(`monday is an Israeli brand !`)        
            }
            break;
        default: break;
    }
    
});
